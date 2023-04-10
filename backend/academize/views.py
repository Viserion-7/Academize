from django.shortcuts import render, HttpResponse
from .models import Semester, Mark, Subject, Students
from .serializers import StudentsSerializer, SubjectSerializer, SemesterSerializer, MarkSerializer
from rest_framework import viewsets
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Students

class StudentsView(viewsets.ModelViewSet):
    queryset = Students.objects.all()
    serializer_class = StudentsSerializer

class SubjectView(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class SemesterView(viewsets.ModelViewSet):
    queryset = Semester.objects.all()
    serializer_class = SemesterSerializer

class MarksView(viewsets.ModelViewSet):
    queryset = Mark.objects.all()
    serializer_class = MarkSerializer



@csrf_exempt
def search(request):
    if request.method == 'GET':
        query = request.GET.get('q', '')
        students = Students.objects.filter(roll_num=query)
        data = [{
            'id': student.id,
            'name':student.name,
            'roll_num':student.roll_num,
            'username':student.username,
            'phone_number':student.phone_number,
        } for student in students]
        print()
        print(data)
        print()
        return JsonResponse(data, safe=False)
    else:
        return HttpResponse('Bad Request')


def home(request):
    return render(request, 'base.html')


def update_semester(request):
    if request.user.username =='shrisharanyan':

        semester = Semester.objects.all()
        student = None
        marks = Mark.objects.all()
        
        try:
            
            if request.method == 'POST':
                student_userName = request.POST['student_id']
                semNum = request.POST['semester_num']
                semcgpa = request.POST['cgpa']
                markV = request.POST['marks']
                s_id = request.POST['subject_id']
                student = Students.objects.get(roll_num=student_userName)
                
                # TODO
                if markV == "":
                    student_marks = marks.objects.filter(student_name=student, subject_id=s_id, semester_id=5, semester_num=semNum)
                    markV = student_marks

                mark, created = Mark.objects.get_or_create(
                    student_name=student,
                    subject_id=s_id,
                    semester_id=5, #semester_id=5 corresponds to dummy semester.
                    semester_num=semNum,
                    defaults={'marks': markV},
                )


                if not created:
                    mark.marks = markV
                    mark.save()
                    print("Updated Marks")
                else:
                    print("Added Marks")
                
                semester, created = Semester.objects.get_or_create(
                student=student,
                semester_num=semNum,
                defaults={'cgpa': semcgpa},
                )

                if not created:
                    semester.cgpa = semcgpa
                    semester.save(update_fields=['cgpa'])
                    print("Updated CGPA")
                else:
                    print("Added CGPA")
                    
                return render(request, 'success.html')
            
            return render(request, 'update_semester.html', {'semester': semester, 'marks': marks, 'student': student})
        
        except ValueError:
            return HttpResponse("Enter all the values!")
    else:
        return HttpResponse("Authentcation Failed")
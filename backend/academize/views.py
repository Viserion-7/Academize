from django.shortcuts import render, HttpResponse
from .models import Semester, Mark, Subject, Students

def home(request):
    return render(request, 'base.html')


def update_semester(request):
    if request.user.username =='shrisharanyan':
        student_userName = "student1"
        semester = Semester.objects.all()
        student = Students.objects.get(username=student_userName)
        marks = Mark.objects.all()
        
        try:
            if request.method == 'POST':
                semNum = request.POST['semester_num']
                semcgpa = request.POST['cgpa']
                markV = request.POST['marks']
                s_id = request.POST['subject_id']
                s_id = 1
                semNum = 1

                mark, created = Mark.objects.get_or_create(
                    student_name=student,
                    subject_id=s_id,
                    semester_id=5,
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
from django.shortcuts import render, HttpResponse
from .models import Semester, Mark, Subject, Students



def update_semester(request):
    semester = Semester.objects.all()
    student= Students.objects.all()
    marks= Mark.objects.all()
    mark = Mark.objects.first()
    semester_num = mark.semester_num
    try:
        if request.method == 'POST':
            semNum = request.POST['semester_num']
            semcgpa = request.POST['cgpa']
            markV = request.POST['marks']
            s_id = request.POST['subject_id']
            s_id = 8
            semNum = 2
            
            for std in student:
                if std.username == request.user.username:
                    a = std.id
                    for mark in marks:
                        if a == mark.student_name_id and s_id == mark.subject_id and semester == semester_num: 
                            mark.marks = markV
                            mark.save()
                            print("Added Marks")
                    for cgp in semester:
                        if a == cgp.student_id and semNum == cgp.semester_num:
                            cgp.cgpa=semcgpa
                            cgp.save(update_fields=['cgpa'])
                            print()
                            print()
                            print("Added CGPA")
                            print()
                            print()


            return render(request, 'success.html')  # render a success page if the update was successful
        return render(request, 'update_semester.html', {'semester' : semester, 'marks' : marks, 'student' : student})
    
    except ValueError:
        return HttpResponse("Enter all the values!")

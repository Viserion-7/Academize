from rest_framework import serializers
from .models import Students, Semester, Subject, Mark


class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ['id', 'name', 'roll_num', 'username']


class SemesterSerializer(serializers.ModelSerializer):
    student = StudentsSerializer(read_only=True)

    class Meta:
        model = Semester
        fields = ['id', 'student', 'semester_num', 'cgpa']


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['id', 'subject']


class MarkSerializer(serializers.ModelSerializer):
    student_name = StudentsSerializer(read_only=True)
    subject = SubjectSerializer(read_only=True)
    semester = SemesterSerializer(read_only=True)

    class Meta:
        model = Mark
        fields = ['id', 'student_name', 'subject', 'semester', 'semester_num', 'marks']


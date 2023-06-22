from rest_framework import serializers
from .models import Students, Semester, Subject, Mark, FileUpload, Teacher, StudentUpload
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import os, shutil
import csv
from academize.utils import return_username

class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ['id', 'name', 'roll_num', 'username', 'phone_number']


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

    class Meta:
        model = Mark
        fields = ['id', 'student_name', 'subject','semester_num', 'marks']

class UploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileUpload
        fields = '__all__'
    def create(self, validated_data):
        uploaded_file = FileUpload.objects.create(
            file=validated_data['file']
        )
        filePath = os.path.join('media/',str(uploaded_file.file))
        with open(filePath, 'r') as f:
            reader = csv.reader(f)
            for row in reader:
                print(row)
                roll_num = row[0]
                semesterNum = row[2]
                subjectId = row[3]
                marks = row[4]
                subject = Subject.objects.get(id=subjectId)
                print("********************")
                print(subject)
                print("********************")
                student = Students.objects.get(roll_num=roll_num)
                obj = Mark.objects.create(
                    student_name = student,
                    subject = subject,
                    semester_num = semesterNum,
                    marks = marks,
                    semester_id = 5,
                )
                obj.save()
            try:
                shutil.rmtree('media/')
            except:
                pass
                

        return uploaded_file


def save_value_to_file(value):
        file = open('backend/academize/files/persistent_value.txt', 'w')
        file.write(str(value))
        file.close()
            
def read_value_from_file():
    with open('backend/academize/files/persistent_value.txt', 'r') as file:
        value = file.read()
        return int(value)


class StudentUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentUpload
        fields = '__all__'

    
    def create(self, validated_data):
        current_username = return_username()
        
        print("********************")
        print(current_username)
        # save_value_to_file(current_username)
        # value = read_value_from_file()
        print("********************")
        teacher = Teacher.objects.get(username=current_username)
        uploaded_file = StudentUpload.objects.create(
            file=validated_data['file']
        )
        filePath = os.path.join('media/',str(uploaded_file.file))
        with open(filePath, 'r') as f:
            reader = csv.reader(f)
            for row in reader:
                print(row)
                roll_num = row[0]
                student_name = row[1]
                phone_num = row[2]
                try:
                    obj = Students.objects.get(roll_num=roll_num)
                except:
                    obj = Students.objects.create(
                        name = student_name,
                        roll_num = roll_num,
                        username = roll_num,
                        phone_number = phone_num,
                    )
                teacher.students.add(obj)
            try:
                shutil.rmtree('media/')
            except:
                pass
                

        return uploaded_file


class TeacherSerializer(serializers.ModelSerializer):
    students = StudentsSerializer(many=True, read_only=True)

    class Meta:
        model = Teacher
        fields = ['id', 'username', 'students']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    class Meta:
        model = User
        fields = ('username', 'password', 'password2','first_name', 'last_name', 'email')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        username = validated_data['username']
        password = validated_data['password']
        first_name = validated_data['first_name']
        last_name = validated_data['last_name']
        email = validated_data['email']
        user = User.objects.create(
            username=username,
            password=password,
            first_name=first_name,
            last_name=last_name,
            email=email,
        )

        user.set_password(validated_data['password'])
        user.save()
        Teacher.objects.create(username=user.username)

        return user
    
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        # ...

        return token
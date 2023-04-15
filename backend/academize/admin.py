from django.contrib import admin
from .models import Students, Semester, Mark


class MarksInline(admin.TabularInline):
    model = Mark
    # exclude = ('student_name',)


class SemesterAdmin(admin.ModelAdmin):
    # inlines = [MarksInline]
    model = Semester


class StudentAdmin(admin.ModelAdmin):
    model = Students
    list_display = ('name', 'roll_num')
    search_fields = ['name', 'roll_num']
    actions = ['create_semesters']

    def create_semesters(self, request, queryset):
        for student in queryset:
            student.create_semesters()
    create_semesters.short_description = "Create semesters for selected students"


admin.site.register(Students, StudentAdmin)
admin.site.register(Semester, SemesterAdmin)
admin.site.register(Mark)
# Generated by Django 4.1.7 on 2023-04-04 14:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('academize', '0008_rename_marks_mark'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Student',
            new_name='Students',
        ),
    ]
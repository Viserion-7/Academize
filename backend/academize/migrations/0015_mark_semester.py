# Generated by Django 4.1.7 on 2023-04-15 11:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('academize', '0014_remove_mark_semester'),
    ]

    operations = [
        migrations.AddField(
            model_name='mark',
            name='semester',
            field=models.ForeignKey(default=5, on_delete=django.db.models.deletion.CASCADE, to='academize.semester'),
            preserve_default=False,
        ),
    ]

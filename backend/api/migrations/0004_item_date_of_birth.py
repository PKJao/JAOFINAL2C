# Generated by Django 5.0.6 on 2024-07-07 23:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_rename_phone_item_contact_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='date_of_birth',
            field=models.CharField(max_length=100, null=True),
        ),
    ]

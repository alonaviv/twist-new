from django.http import JsonResponse
from datetime import datetime
from .models import TestModel

def get_time(request):
    raise KeyError
    test_obj = TestModel(test_field="Test data", another_field="More data")
    test_obj.save()

    retrieved_obj = TestModel.objects.get(pk=test_obj.pk)

    current_time = datetime.now().strftime("%-I:%S %p")
    current_date = datetime.now().strftime("%A %m %-Y")

    data = {
        'time': current_time,
        'date': current_date,
        'obj': retrieved_obj.test_field + " " + retrieved_obj.another_field
    }

    return JsonResponse(data)

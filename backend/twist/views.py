from django.views.generic import TemplateView

serve_react = TemplateView.as_view(template_name='index.html')

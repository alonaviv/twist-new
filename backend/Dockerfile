FROM python:3.8.10

# Set the environment variable to enable unbuffered Python output
ENV PYTHONUNBUFFERED=1

# Set the DEBIAN_FRONTEND environment variable to avoid prompts during package installation
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get install -y \
        libpq-dev=11.20-0+deb10u1 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /twist/backend/

COPY . .

RUN chmod +x startup.sh

RUN pip install --no-cache-dir -r requirements.txt

# Using a dummy secret key, since the actual key from .env is only available in runtime.
RUN DJANGO_SECRET_KEY=dummy python manage.py collectstatic --no-input

EXPOSE 8000

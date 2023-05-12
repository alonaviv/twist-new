FROM python:3.8.10

# Set the environment variable to enable unbuffered Python output
ENV PYTHONUNBUFFERED=1

# Set the DEBIAN_FRONTEND environment variable to avoid prompts during package installation
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get install -y \
        libpq-dev=11.20-0+deb10u1 \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

WORKDIR /twist/

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

WORKDIR /twist/frontend/

RUN npm install \
    && npm run build

WORKDIR /twist/backend/

RUN python manage.py makemigrations

EXPOSE 8000

CMD ["gunicorn", "twist.wsgi:application", "-b", "0.0.0.0:8000"]

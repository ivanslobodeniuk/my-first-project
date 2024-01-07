FROM python:alpine
LABEL authors="ivan"
WORKDIR /app
RUN pip install pymongo
COPY . .
CMD ["python", "main.py"]

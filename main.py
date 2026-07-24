from fastapi import FastAPI
from fastapi.responses import FileResponse

app = FastAPI()

@app.get("/")
def home():
    return FileResponse("index.html")

@app.get("/add")
def add(num1 : float, num2 : float):
    return {
        "answer" : num1 + num2
    }

@app.get("/subtract")
def subtract(num1 : float, num2 : float):
    return {
        "answer" : num1 - num2
    }

@app.get("/multiply")
def multiply(num1 : float, num2 : float):
    return {
        "answer" : num1 * num2
    }

@app.get("/divide")
def divide(num1 : float, num2 : float):
    if num2 == 0:
        return {
            "error" : "undefined"
        }
    else:
        return {
            "answer" : num1 / num2
        }
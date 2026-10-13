from fastapi import FastAPI

app = FastAPI(title="Taal API")


@app.get("/health")
def health_check():
    return {"status": "ok"}
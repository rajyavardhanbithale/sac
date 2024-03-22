from fastapi import FastAPI, APIRouter, Request, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware


class BackendAPI:
    def __init__(self):
        self.router = APIRouter()
        self.app_version = "v1"
        self.router.add_api_route(
            f"/{self.app_version}/gallery/add", self.addImage, methods=["POST"])
        
        
        
    
        
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://192.168.29.82:3000",
        "https://agrihelp-3.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api = BackendAPI()
app.include_router(api.router)
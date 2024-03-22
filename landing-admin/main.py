from fastapi import FastAPI, APIRouter, Request, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

import re

class ImageModel(BaseModel):
    image_url: str


class BackendAPI:
    def __init__(self):
        self.router = APIRouter()
        self.app_version = "v1"
        self.router.add_api_route(
            f"/{self.app_version}/gallery/add", self.addImage, methods=["POST"])
        self.router.add_api_route(
            f"/{self.app_version}/gallery/remove", self.removeImage, methods=["POST"])
        
        # print(os.environ.get("MONGODB_URI"))
        
        # Mongo Connection 
        client = MongoClient(os.environ.get("MONGODB_URI")) 
        db = client['SAC'] 
        self.collection_gallery = db['gallery']
    
    def extractGoogleDriveId(self,url):
        try:
            idRegex = r'/d/([a-zA-Z0-9_-]+)/view'
            match = re.search(idRegex, url)
            if match and len(match.groups()) > 0:
                return match.group(1)
            
            elif len(url.split('/')[5]) >= 32:
                return url.split('/')[5]
            else:
                return None
        except:
            return None
        
        
    def addImage(self, image_url: ImageModel):
        image_id = self.extractGoogleDriveId(image_url.image_url)
        if image_id:
            update = self.collection_gallery.update_one(
                {},  
                { "$push" : { "id": image_id } }  
            )
        return update.acknowledged
    
    
    def removeImage(self, image_url: ImageModel):
        image_id = self.extractGoogleDriveId(image_url.image_url)
        if image_id:
            remove = self.collection_gallery.update_many(
                {"id": image_id},
                {"$pull": {"id": image_id}}
            )

        return remove.acknowledged
        
app  = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[
#         "http://localhost:3000",
#         "http://192.168.29.82:3000",
#         "https://agrihelp-3.vercel.app",
#     ],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

api = BackendAPI()
app.include_router(api.router)
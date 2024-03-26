from fastapi import FastAPI, APIRouter, Request, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from pymongo import MongoClient
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

import re

class ImageModel(BaseModel):
    isID:bool = None
    image_url: str

class Club(BaseModel):
    clubName:str
    mission:str
    vision:str
    incharge: List[str] | str
    position: List[str] | str
    contact: List[str] | str

class BackendAPI:
    def __init__(self):
        self.router = APIRouter()
        self.app_version = "v1"
        self.router.add_api_route(
            f"/{self.app_version}/gallery/add", self.addImage, methods=["POST"])
        self.router.add_api_route(
            f"/{self.app_version}/gallery/remove", self.removeImage, methods=["POST"])
        self.router.add_api_route(
            f"/{self.app_version}/gallery/images", self.showImages, methods=["GET"])
        
        self.router.add_api_route(
            f"/{self.app_version}/home/club", self.editClub, methods=["POST"])
        
        # Mongo Connection 
        client = MongoClient(os.environ.get("MONGODB_URI")) 
        db = client['SAC'] 
        self.collection_gallery = db['gallery']
        self.collection_home = db['home']
    
    def extractGoogleDriveId(self,url):
        try:
            idRegex = r'/d/([a-zA-Z0-9_-]+)/view'
            match = re.search(idRegex, url)
            if match and len(match.groups()) > 0:
                return match.group(1)
            
            else:
                return None
        except:
            return None
        
        
    def addImage(self, image_url: ImageModel):
        image_id = self.extractGoogleDriveId(image_url.image_url)
        result = self.collection_gallery.find_one({"id": image_id})
        if result:
            return "Image Exists !"
        
        if image_id:
            update = self.collection_gallery.update_one(
                {},  
                { "$push" : { "id": image_id } }  
            )
        return update.acknowledged
    
    
    def removeImage(self, image_url: ImageModel):
        
        if not image_url.isID:
            image_id = self.extractGoogleDriveId(image_url.image_url)
        else:
            image_id = image_url.image_url
            
        if image_id:
            remove = self.collection_gallery.update_many(
                {"id": image_id},
                {"$pull": {"id": image_id}}
            )

        return remove.acknowledged
    
    def showImages(self):
        try:
            images = list(self.collection_gallery.find())
            for image in images:
                image.pop('_id', None)
            return {"images": images[0]}
        except Exception as e:
            return {"error": str(e)}
        
        
    def editClub(self,club:Club):
        query = {"id": "club_info", "data.name": club.clubName}
        update_operation = {"$set": 
            {
                "data.$.mission": club.mission,
                "data.$.vision": club.vision,
                "data.$.incharge": club.incharge,
                "data.$.position": club.position,
                "data.$.contact": club.contact,
            }
        }
        
        result = self.collection_home.update_one(query, update_operation)
        return "ok"
        
app  = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api = BackendAPI()
app.include_router(api.router)
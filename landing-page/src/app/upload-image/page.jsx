'use client'
import axios from 'axios';
import React, { useState } from 'react';


const UploadForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedFile) {
            alert('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);
            if (response.status === 200) {
                alert("File Uploaded")
            } else {
                alert("File Uploaded Failed")
            }

        } catch (error) {
            console.error(error);
            alert('Upload failed');
        }
    };

   
    return (
        <form method='POST' onSubmit={handleSubmit}>
            <input type="file" onChange={handleChange} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default UploadForm;
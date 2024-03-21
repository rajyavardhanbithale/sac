'use client'

import React, { useState } from 'react';

const App = () => {
    const [url, setUrl] = useState('');
    const [id, setID] = useState(null);
    const [error, setError] = useState(null);


    function extractGoogleDriveId(url) {
        const idRegex = /\/d\/([a-zA-Z0-9_-]+)\/view/;
        const match = url.match(idRegex);
        if (match && match.length > 1) {
            return match[1];
        } else {
            return null;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const extract_id = extractGoogleDriveId(url)
        // https://drive.google.com/file/d/1n13YJSeLc1kk1TgawxvRC2v8KG9DvO_f/view
        if (extract_id !== null) {
            setID(extract_id)
            setError(null)
        } else {
            setID(null)
            setError("Invalid URL")
        }

    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div className="max-w-md w-full p-6 bg-gray-200 rounded-md shadow-md">
                <h2 className="text-xl font-semibold mb-4">Enter URL</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                        <input
                            type="text"
                            className="w-full py-2 px-4 focus:outline-none"
                            placeholder="Enter URL here..."
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 focus:outline-none">Upload</button>
                    </div>
                </form>

                {id &&
                    <span className="mt-4 flex w-full justify-center text-green-500 tracking-wider">
                        {id}
                    </span>
                }
                {error &&
                    <span className="mt-4 flex w-full justify-center text-red-500 tracking-wider">
                        {error}
                    </span>
                }

            </div>

            {/* Image display section */}
            <div className="mt-4">
                {id &&
                    <img src={`https://lh3.googleusercontent.com/d/${id}=w1000?authuser=1/view`} alt="" />
                }
            </div>
        </div>
    );
}

export default App;


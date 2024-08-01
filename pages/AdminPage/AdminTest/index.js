import React, { useState, useRef } from 'react';

const AdminTest = () => {
    const inputFileRef = useRef(null);
    const [blob, setBlob] = useState(null);

    const handleUpload = async (event) => {
        event.preventDefault();

        const file = inputFileRef.current.files[0];
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('https://api.vercel.com/v2/now/files', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_VERCEL_TOKEN}`,
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setBlob(data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <h1>Upload Your Avatar</h1>
            <form onSubmit={handleUpload}>
                <input name="file" ref={inputFileRef} type="file" required />
                <button type="submit">Upload</button>
            </form>
            {blob && (
                <div>
                    Blob URL: <a href={blob.url}>{blob.url}</a>
                </div>
            )}
        </div>
    );
};

export default AdminTest;

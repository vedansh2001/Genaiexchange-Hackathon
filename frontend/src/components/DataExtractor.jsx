import React, { useState } from 'react';

const DataExtractor = ({ onExtract }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [responseText, setResponseText] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const extractDataFromResponse = (extractedText) => {
    // Logic to transform extractedText into an object with keys matching your form
    return {
      name: '', // Extracted name
      dob: '',  // Extracted date of birth
      address: '', // Extracted address
      phone: '', // Extracted phone number
      // ... other fields
    };
  };

  async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    setLoading(true); // Start loading
    try {
      const response = await fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log("this is data", data);
      setResponseText(data.extracted_text); // Set the extracted text from the response

      // Call onExtract with the extracted data only after setting the response text
      const extractedData = extractDataFromResponse(data.extracted_text);
      onExtract(extractedData);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      uploadFile(selectedFile); // Call upload function when button is clicked
    } else {
      console.error('No file selected');
    }
  };

  return (
    <div className='text-white mt-8'>
      <h1>Upload Document</h1>
      <input 
        type="file" 
        accept=".pdf,.doc,.docx,.jpg,.png" // Accept specific file types
        onChange={handleFileChange}
      />
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      <button onClick={handleUploadClick} disabled={loading}>
        {loading ? (
          <span className="loader"></span> // Show loader while loading
        ) : (
          'Upload'
        )}
      </button>
      {responseText && <div><h2>Extracted Text:</h2><p>{responseText}</p></div>}

      <style>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-left-color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
          display: inline-block;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        button {
          margin-top: 10px;
          padding: 10px 20px;
          color: white;
          background-color: #007BFF;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:disabled {
          background-color: #6c757d;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default DataExtractor;

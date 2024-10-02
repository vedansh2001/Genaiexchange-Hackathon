from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os

API_KEY = 'AIzaSyAkdZbCHRp73wyt43krCC1AIGkALHP0hbc'
genai.configure(api_key=API_KEY)

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def prep_image(image_path):
    sample_file = genai.upload_file(path=image_path, display_name="Diagram")
    return sample_file

def extract_text_from_image(image_path, prompt):
    model = genai.GenerativeModel(model_name="gemini-1.5-pro")
    response = model.generate_content([image_path, prompt])
    return response.text

@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        if 'file' not in request.files:
            return jsonify({"message": "No file part"}), 400

        file = request.files['file']

        if file.filename == '':
            return jsonify({"message": "No selected file"}), 400

        uploads_dir = 'uploads'
        if not os.path.exists(uploads_dir):
            os.makedirs(uploads_dir)

        file_path = os.path.join(uploads_dir, file.filename)
        file.save(file_path)

        sample_file = prep_image(file_path)
        text = extract_text_from_image(sample_file, "I will upload documents or images, often related to identity and personal information. The model should extract any identifiable data and match it exactly to the following fields: name, dob, address, phone, age, income, gender, nationality, maritalStatus, emergencyContact, nomineeDetails, occupation, panNumber, aadhaarNumber, preExistingConditions, lifestyleHabits, educationLevel, dependents, healthInsurance, previousInsuranceClaims, preferredContactMethod, socialMediaProfiles, and hobbiesInterests. Return the identified fields in a JSON format with the exact key names.")

        if os.path.exists(file_path):
            os.remove(file_path)

        return jsonify({"message": "File uploaded successfully", "extracted_text": text})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

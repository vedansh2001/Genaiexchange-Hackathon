import os
from flask import Flask, render_template, request, jsonify
from PyPDF2 import PdfReader
import google.generativeai as genai
import json
from google.api_core import retry

# Correct, secure way to get the API key from the environment
api_key = os.getenv("GOOGLE_API_KEY")

if not api_key:
    raise ValueError("GOOGLE_API_KEY environment variable not set")

genai.configure(api_key=api_key)


# app creation
app = Flask(__name__)

# load model
model = genai.GenerativeModel("gemini-1.5-pro")

@retry.Retry()
def parse_resume_with_retry(resume_text):
    prompt = f"""
    You are a resume parsing assistant. Given the following resume text, extract all the important details and return them in a well-structured JSON format.

    The resume text:
    {resume_text}

    Extract and include the following:
    - Full Name (First, Middle, Last)
    - Contact Number
    - Email Address
    - Location
    - Technical Skills
    - Non-Technical Skills
    - Education
    - Work Experience
    - Certifications
    - Languages
    - Suggested Resume Category
    - Recommended Job Roles

    Return the response in JSON format.
    """

    # Generate response from the model
    response = model.generate_content(prompt)
    return response.text

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload_resume', methods=['POST'])
def upload_resume():
    if 'resume' not in request.files:
        return jsonify({"error": "No file part"})

    file = request.files['resume']

    if file.filename == '':
        return jsonify({"error": "No selected file"})

    if file and file.filename.endswith('.pdf'):
        # Extract text from the PDF
        text = ""
        reader = PdfReader(file)
        for page in reader.pages:
            text += page.extract_text()

        try:
            # Get parsed resume details from the model
            response = parse_resume_with_retry(text)

            # Clean the response by removing the ```json and surrounding text
            response_clean = response.replace("```json", "").replace("```", "").strip()

            # Load the cleaned response into a dictionary
            data = json.loads(response_clean)

            # Extract details from the JSON response
            full_name = data.get("Full Name", "")
            contact_number = data.get("Contact Number", "")
            email_address = data.get("Email Address", "")
            location = data.get("Location", "")
            technical_skills = data.get("Technical Skills", "")
            non_technical_skills = data.get("Non-Technical Skills", "")
            education = data.get("Education", "")
            work_experience = data.get("Work Experience", "")
            certifications = data.get("Certifications", "")
            languages = data.get("Languages", "")
            suggested_resume_category = data.get("Suggested Resume Category", "")
            recommended_job_roles = data.get("Recommended Job Roles", "")

            # Render the template and pass the extracted values to HTML
            return render_template('index.html',
                                   full_name=full_name,
                                   contact_number=contact_number,
                                   email_address=email_address,
                                   location=location,
                                   technical_skills=technical_skills,
                                   non_technical_skills=non_technical_skills,
                                   education=education,
                                   work_experience=work_experience,
                                   certifications=certifications,
                                   languages=languages,
                                   suggested_resume_category=suggested_resume_category,
                                   recommended_job_roles=recommended_job_roles)

        except Exception as e:
            return jsonify({"error": f"An error occurred: {str(e)}"})

    return jsonify({"error": "Invalid file format"})

# Start the Flask app
if __name__ == "__main__":
    # Get the port from the environment, default to 5000
    port = int(os.environ.get("PORT", 5000))
    # Bind to 0.0.0.0 and use the provided port
    app.run(host='0.0.0.0', port=port, debug=True)

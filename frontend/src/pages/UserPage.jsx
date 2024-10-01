import { useState } from "react";

const UserProfilePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    address: '',
    phone: '',
    age: '',
    income: '',
    gender: '',
    nationality: '',
    maritalStatus: '',
    emergencyContact: '',
    nomineeDetails: '',
    occupation: '',
    panNumber: '',
    aadhaarNumber: '',
    preExistingConditions: '',
    lifestyleHabits: '',
    educationLevel: '',
    dependents: '',
    healthInsurance: '',
    previousInsuranceClaims: '',
    preferredContactMethod: '',
    socialMediaProfiles: '',
    hobbiesInterests: '',
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Data:', formData);
    alert('Profile Saved Successfully!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-screen-xl">
        <h2 className="text-3xl font-bold text-center mb-6">User Profile</h2>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-600 "
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
            <input
              type="file"
              id="profile-photo"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <label
              htmlFor="profile-photo"
              className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7" />
              </svg>
            </label>
          </div>
        </div>

        {/* User Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 w-full">
          {/* Name and DOB */}
          <div>
            <label className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Address and Phone */}
          <div>
            <label className="block text-sm font-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your address"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Age and Income */}
          <div>
            <label className="block text-sm font-semibold">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your age"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Income</label>
            <input
              type="number"
              name="income"
              value={formData.income}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your income"
              required
            />
          </div>

          {/* Gender and Nationality */}
          <div>
            <label className="block text-sm font-semibold">Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your gender"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Nationality</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your nationality"
              required
            />
          </div>

          {/* Marital Status and Emergency Contact */}
          <div>
            <label className="block text-sm font-semibold">Marital Status</label>
            <input
              type="text"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your marital status"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Emergency Contact</label>
            <input
              type="tel"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter emergency contact"
              required
            />
          </div>

          {/* Nominee Details, PAN Number, and Aadhaar Number */}
          <div>
            <label className="block text-sm font-semibold">Nominee Details</label>
            <input
              type="text"
              name="nomineeDetails"
              value={formData.nomineeDetails}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter nominee details"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">PAN Number</label>
            <input
              type="text"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your PAN number"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Aadhaar Number</label>
            <input
              type="text"
              name="aadhaarNumber"
              value={formData.aadhaarNumber}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Aadhaar number"
              required
            />
          </div>

          {/* Pre-Existing Conditions and Lifestyle Habits */}
          <div>
            <label className="block text-sm font-semibold">Pre-Existing Conditions</label>
            <textarea
              name="preExistingConditions"
              value={formData.preExistingConditions}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter pre-existing conditions"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-semibold">Lifestyle Habits</label>
            <textarea
              name="lifestyleHabits"
              value={formData.lifestyleHabits}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter lifestyle habits"
            ></textarea>
          </div>

          {/* New Fields */}
          <div>
            <label className="block text-sm font-semibold">Occupation</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your occupation"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Education Level</label>
            <input
              type="text"
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your education level"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Dependents</label>
            <input
              type="text"
              name="dependents"
              value={formData.dependents}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter details about dependents"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Health Insurance</label>
            <input
              type="text"
              name="healthInsurance"
              value={formData.healthInsurance}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your health insurance details"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Previous Insurance Claims</label>
            <textarea
              name="previousInsuranceClaims"
              value={formData.previousInsuranceClaims}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter previous insurance claims"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-semibold">Preferred Contact Method</label>
            <input
              type="text"
              name="preferredContactMethod"
              value={formData.preferredContactMethod}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your preferred contact method"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Social Media Profiles</label>
            <input
              type="text"
              name="socialMediaProfiles"
              value={formData.socialMediaProfiles}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your social media profiles"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Hobbies/Interests</label>
            <textarea
              name="hobbiesInterests"
              value={formData.hobbiesInterests}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your hobbies or interests"
            ></textarea>
          </div>

        </form>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-6 rounded-lg w-1/2 ml-[25%] mt-12"
          >
            Save Profile
          </button>
      </div>
    </div>
  );
};

export default UserProfilePage;

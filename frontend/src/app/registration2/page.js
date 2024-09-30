import React from 'react';

function RegistrationForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200">
      <div className="absolute top-4 left-4">
        <button
          className="text-white hover:underline text-lg"
          // onClick={() => window.history.back()} // navigate back to the previous page
        >
          Back
        </button>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Zeo Alejandro"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Dongallo"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="zeodongallo@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="birthDate" className="text-sm font-semibold text-gray-700">Birth Date</label>
              <input
                type="date"
                id="birthDate"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="phoneNumber" className="text-sm font-semibold text-gray-700">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="09123456789"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm font-semibold text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              placeholder="zeoalejandro"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" required />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to MR. ROVER's Terms and Conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition duration-200"
          >
            REGISTER
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-600">
          Already have an account? <a href="#" className="text-blue-500 hover:underline">Login here</a>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;

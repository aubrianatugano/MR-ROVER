import React from 'react';

function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="text-center">
          <img src="/assets/MR-LOGO.jpg" alt="MR. ROVER" className="mx-auto mb-4 h-24" />
          <h1 className="text-2xl font-bold text-gray-700 mb-8">Register As</h1>
        </div>
        <div className="space-y-4">
          <a href="registration2">
            <button
              className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition duration-200 mb-4"
            >
              Vehicle Owner
            </button>
          </a>
          <a href="registration2">
            <button
              className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition duration-200"
            >
              Driver
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

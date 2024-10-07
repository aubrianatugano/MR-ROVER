import React from 'react';

function AdminProfile() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <div className="bg-blue-200 p-4 flex justify-between items-center">       
        <div className="text-black font-extrabold text-xl ml-8">
          <img src="/assets/MR-LOGO.jpg" alt="" className="h-8 inline-block mr-2" />
          MR. ROVER
        </div>
        <div className="flex justify-end items-center mr-8">
          <div className="text-black font-semibold">SANDBOX TEAM</div>
          <button className="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.707 9.707a1 1 0 00-1.414-1.414L3 10.586l-2.293-2.293a1 1 0 00-1.414 1.414L1.586 12l-2.293 2.293a1 1 0 101.414 1.414L3 13.414l2.293 2.293a1 1 0 001.414-1.414L4.414 12l2.293-2.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="bg-gray-800 text-white p-8 w-1/4 min-h-screen">
          <div className="flex items-center mb-8">
            <img src="/assets/SB-LOGO.jpg" alt="" className="h-12 w-12 rounded-full mr-4" />
            <div>
              <div className="font-semibold">SANDBOX TEAM</div>
              <div className="text-gray-400 text-sm">Admin Account</div>
            </div>
          </div>
          <div className="mt-4">
            <button className="flex items-center text-white hover:bg-gray-600 p-2 rounded-lg w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zM3.63 7.36C2.38 8.53 2 9.83 2 11c0 2.76 2.24 5 5 5 1.17 0 2.47-.38 3.64-1.63L9.22 14H7c-1.66 0-3-1.34-3-3 0-.18.02-.35.06-.52l-1.43-1.43z"
                />
              </svg>
              Profile
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white p-12 flex flex-col items-center">
          <div className="mb-8">
            <img src="/assets/SB-LOGO.jpg" alt="Profile" className="h-40 w-40 rounded-full border-4 border-gray-300" />
            <button className="mt-4 bg-gray-200 text-black px-4 py-2 rounded-lg">
              Edit
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 w-3/4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-950"
                placeholder="Enter First Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-950"
                placeholder="Enter Last Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-950"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-950"
                placeholder="Enter Phone Number"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-950"
                placeholder="Enter Username"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-950"
                placeholder="Enter Password"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;

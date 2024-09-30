import React from 'react';

function AccountManagement() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <div className="bg-blue-200 p-4 flex justify-between items-center">
        <div className="text-black font-extrabold text-xl ml-8">
          <img src="/assets/MR-LOGO.jpg" alt="MR. ROVER" className="h-8 inline-block mr-2" />
          MR. ROVER
        </div>
        <div className="flex justify-end items-center mr-8">
          <div className="text-black font-semibold">ADMIN</div>
          <button className="ml-4">
            Logout
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="bg-gray-800 text-white p-8 w-1/4 min-h-screen">
          <div className="flex items-center mb-8">
            <img src="/assets/SB-LOGO.jpg" alt="Sandbox Team" className="h-12 w-12 rounded-full mr-4" />
            <div>
              <div className="font-semibold">SANDBOX TEAM</div>
              <div className="text-gray-400 text-sm">Admin Account</div>
            </div>
          </div>
          <div className="mt-4">
            <button className="flex items-center text-white hover:bg-gray-600 p-2 rounded-lg w-full">
              Account Management
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white p-12">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-semibold">VehicleOwnerID</th>
                  <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-semibold">First Name</th>
                  <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-semibold">Last Name</th>
                  <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-semibold">Email</th>
                  <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-semibold">Phone Number</th>
                  <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">1</td>
                  <td className="py-2 px-4 border-b border-gray-200">Zeo</td>
                  <td className="py-2 px-4 border-b border-gray-200">Dongallo</td>
                  <td className="py-2 px-4 border-b border-gray-200">zeodongallo@gmail.com</td>
                  <td className="py-2 px-4 border-b border-gray-200">09123456789</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <button className="text-blue-500 hover:underline mr-4">Details</button>
                    <button className="text-green-500 hover:underline mr-4">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>
                {/* Add more rows as necessary */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountManagement;

import React from 'react';

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="text-center">
          <img src="/assets/MR-LOGO.jpg" alt="MR. ROVER" className="mx-auto mb-4 h-20" />
          <h1 className="text-2xl font-bold text-gray-700 mb-2">Welcome, Kalovers!</h1>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="username"
            className="w-full px-4 py-2 border text-gray-950 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="password"
            className="w-full px-4 py-2 border text-gray-950 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            LOGIN
          </button>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <label>
              <input type="checkbox" className="mr-1" /> Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
          </div>
        </form>
        <div className="text-center mt-4 text-sm text-gray-600">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Register here</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

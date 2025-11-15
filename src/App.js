import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AGIS Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome to your digital AGIS Deal-Initiation & Verification Hub
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-primary-600">1,234</p>
            <p className="text-sm text-success-600 mt-1">+12% from last month</p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Agents</h3>
            <p className="text-3xl font-bold text-primary-600">89</p>
            <p className="text-sm text-success-600 mt-1">+5% from last month</p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Listings</h3>
            <p className="text-3xl font-bold text-primary-600">456</p>
            <p className="text-sm text-success-600 mt-1">+8% from last month</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="btn-primary mr-4">
            Get Started
          </button>
          <button className="btn-secondary">
            Learn More
          </button>
        </div>

        {/* Test different Tailwind utilities */}
        <div className="mt-12 p-6 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-4">AGIS  is Working! 🎉</h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success-500 text-white">
              Success Badge
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-warning-500 text-white">
              Warning Badge
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-white">
              Neutral Badge
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
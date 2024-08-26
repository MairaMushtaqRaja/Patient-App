import { useState } from 'react'
import AdminNavBar from './AdminNavbar'
function Report() {
  const [activeTab, setActiveTab] = useState('New Test');
  return (
    <div>
      <div className="relative flex items-start mt-10 bg-gradient-to-r from-blue-900 to-blue-900 p-5 rounded-lg">
        <div className="absolute -top-10 left-10">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9058/9058693.png"
            alt="Admin"
            className="w-24 h-24 object-cover"
          />
        </div>
        <div className="ml-80 text-center">
          <h1 className="text-2xl font-bold text-white">Welcome to the Admin Panel</h1>
        </div>
      </div>
      <div className="min-h-screen p-4 bg-gray-100 mt-10 rounded-md">
        <AdminNavBar />
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="flex space-x-4 mt-2 ml-5">
            <button
              onClick={() => setActiveTab('New Test')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'New Test' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-950'}`}
            >
              Test Price List
            </button>
          </div>
        </div>
        <div className="w-full border-b border-blue-900 mt-0"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-4">
          <div className="flex-1 mt-4">
            <label className="block text-blue-950 ml-2">From:</label>
            <input
              placeholder="Discount"
              type="date"
              className="w-full  text-end px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
            />
          </div>
          <div className="flex-1 mt-4">
            <label className="block text-blue-950 ml-2">To:</label>
            <input
              placeholder="Discount"
              type="date"
              className="w-full  text-end px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
            />
          </div>
        </div>
        <div className="flex mt-20 gap-5">
        <button
          className="px-4 py-2 bg-blue-900 text-white rounded-lg ml-20  hover:bg-red-600 mt-4 w-1/4  "
        >
          All
        </button>
        <button
          className="px-4 py-2 bg-blue-900 text-white rounded-lg ml-2  hover:bg-yellow-500 mt-4 w-1/4 "
        >
          Self
        </button>
        <button
          className="px-4 py-2 bg-blue-900 text-white rounded-lg ml-2 w-1/4 hover:bg-green-600 mt-4  "
        >
          Outsource
        </button>
        </div>
      </div>
    </div>
  )
}

export default Report
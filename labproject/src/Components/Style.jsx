import { useState } from 'react';
import AdminNavBar from './AdminNavbar';


function Style() {
  const [activeTab, setActiveTab] = useState('New Test');
  const [isPageFormatModalOpen, setIsPageFormatModalOpen] = useState(false);
  const [isHeaderFooterModalOpen, setIsHeaderFooterModalOpen] = useState(false);
  const [selectedPageFormat, setSelectedPageFormat] = useState('');
  const [selectedReportFormat, setSelectedReportFormat] = useState('');

  const [firstFooter, setFirstFooter] = useState(false);
  const [secondFooter, setSecondFooter] = useState(false);
  const [thirdFooter, setThirdFooter] = useState(false);
  const [fourthFooter, setFourthFooter] = useState(false);
  const handleFirstOpen = () => {
    setFirstFooter(true);
  }
  const handleFirstClose = () => {
    setFirstFooter(false);
  }
  const handleSecondOpen = () => {
    setSecondFooter(true);
  }
  const handleSecondClose = () => {
    setSecondFooter(false);
  }
  const handleThirdOpen = () => {
    setThirdFooter(true);
  }
  const handleThirdClose = () => {
    setThirdFooter(false);
  }
  const handleFourthOpen = () => {
    setFourthFooter(true);
  }
  const handleFourthClose = () => {
    setFourthFooter(close);
  }

  const handleSave = () => {
    if (selectedPageFormat && selectedReportFormat) {
      // Here you would trigger the report generation, e.g., calling an API
      console.log('Generating report with:', { selectedPageFormat, selectedReportFormat });
      // Simulate report generation for now
      alert(`Report generated with ${selectedPageFormat} and ${selectedReportFormat}`);
    } else {
      alert('Please select both Page Format and Report Format');
    }
  };


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
              Payment Receipt
            </button>
            <button
              onClick={() => setActiveTab('Update Test')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'Update Test' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-950'}`}
            >
              Reporting Format
            </button>
            <button
              onClick={() => setActiveTab('Discount')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'Discount' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-950'}`}
            >
              Footer Entries
            </button>
          </div>
        </div>
        {activeTab === 'New Test' && (
          <div className="bg-slate-100 p-4 rounded-lg">
            <div className="w-full border-b border-blue-900 mt-0"></div>
            <div className="flex flex-col mt-5">
              <div>
                <input
                  type="radio"
                  name="pageFormat"
                  value="A4 Portrait"
                  onClick={() => setIsPageFormatModalOpen(true)}
                />
                <label className="ml-2 text-blue-900">Select Page Format</label>
              </div>
              <div className="mt-5">
                <input
                  type="radio"
                  name="reportFormat"
                  value="Right Side"
                  onClick={() => setIsHeaderFooterModalOpen(true)}
                />
                <label className="ml-2 text-blue-900">Select Reporting Type</label>
              </div>
            </div>
            <button
              className="mt-10 ml-0 px-10 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        )}

        {isPageFormatModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
            onClick={() => setIsPageFormatModalOpen(false)}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg w-1/2"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-red-500 mb-4 text-center">Select Page Format</h3>
              <div>
                <input
                  type="radio"
                  name="pageFormat"
                  value="A4 Portrait"
                  onChange={(e) => setSelectedPageFormat(e.target.value)}
                />
                <label className="ml-2 text-blue-900">A4 Size Portrait</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="pageFormat"
                  value="A4 Landscape"
                  onChange={(e) => setSelectedPageFormat(e.target.value)}
                  className="mt-2"
                />
                <label className="ml-2 text-blue-900">A4 Size Landscape</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="pageFormat"
                  value="A5 Portrait"
                  onChange={(e) => setSelectedPageFormat(e.target.value)}
                  className="mt-2"
                />
                <label className="ml-2 text-blue-900">A5 Portrait</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="pageFormat"
                  value="A5 Landscape"
                  onChange={(e) => setSelectedPageFormat(e.target.value)}
                  className="mt-2"
                />
                <label className="ml-2 text-blue-900">A5 Size Landscape</label>
              </div>
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={() => setIsPageFormatModalOpen(false)}
              >
                Done
              </button>
            </div>
          </div>
        )}

        {isHeaderFooterModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
            onClick={() => setIsHeaderFooterModalOpen(false)}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg w-1/2"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-red-500 mb-4 text-center">Select Reporting Format</h3>
              <div>
                <input
                  type="radio"
                  name="reportFormat"
                  value="Right Side"
                  onChange={(e) => setSelectedReportFormat(e.target.value)}
                />
                <label className="ml-2 text-blue-900">Right Side</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="reportFormat"
                  value="Below Header"
                  onChange={(e) => setSelectedReportFormat(e.target.value)}
                  className="mt-2"
                />
                <label className="ml-2 text-blue-900">Below Header</label>
              </div>
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={() => setIsHeaderFooterModalOpen(false)}
              >
                Done
              </button>
            </div>
          </div>
        )}
        {activeTab === 'Discount' && (
          <div className="bg-slate-100 p-4 rounded-lg">
            <div className="w-full border-b border-blue-900 mt-0"></div>
            <div>
              <input
                type="radio"
                className="mt-10"
                onClick={handleFirstOpen}
              />
              <label className="ml-2  text-blue-900">First Footer</label>
            </div>
            <div>
              <input
                type="radio"
                className="mt-5"
                onClick={handleSecondOpen}
              />
              <label className="ml-2  text-blue-900">Second Footer</label>
            </div>
            <div>
              <input
                type="radio"
                className="mt-5"
                onClick={handleThirdOpen}
              />
              <label className="ml-2  text-blue-900">Third Footer</label>
            </div>
            <div>
              <input
                type="radio"
                className="mt-5"
                onClick={handleFourthOpen}
              />
              <label className="ml-2  text-blue-900">Fourth Footer</label>
            </div>
            {firstFooter && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
                onClick={handleFirstClose}
              >
                <div
                  className="bg-white p-6 rounded-lg shadow-lg w-1/2 "
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-lg font-semibold text-red-500 mb-4 text-center">First Footer Update</h3>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Line 1:</label>
                    <input
                      placeholder="Line1"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Line 2:</label>
                    <input
                      placeholder="Line2"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Line 3:</label>
                    <input
                      placeholder="Line3"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Line 4:</label>
                    <input
                      placeholder="Line4"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <button
                    onClick={handleFirstClose}
                    className="mt-7 ml-0 px-10 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
                  >
                    Update
                  </button>
                </div>
              </div>
            )}
              {secondFooter && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
                onClick={handleSecondClose}
              >
                <div
                  className="bg-white p-6 rounded-lg shadow-lg w-1/2 "
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-lg font-semibold text-red-500 mb-4 text-center">Second Footer Update</h3>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Line 1:</label>
                    <input
                      placeholder="Line1"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Line 2:</label>
                    <input
                      placeholder="Line2"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Line 3:</label>
                    <input
                      placeholder="Line3"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Line 4:</label>
                    <input
                      placeholder="Line4"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <button
                    onClick={handleSecondClose}
                    className="mt-7 ml-0 px-10 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
                  >
                    Update
                  </button>
                </div>
              </div>
            )}
              {thirdFooter && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
                onClick={handleThirdClose}
              >
                <div
                  className="bg-white p-6 rounded-lg shadow-lg w-1/2 "
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-lg font-semibold text-red-500 mb-4 text-center">Third Footer Update</h3>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Line 1:</label>
                    <input
                      placeholder="Line1"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Line 2:</label>
                    <input
                      placeholder="Line2"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Line 3:</label>
                    <input
                      placeholder="Line3"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Line 4:</label>
                    <input
                      placeholder="Line4"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <button
                    onClick={handleThirdClose}
                    className="mt-7 ml-0 px-10 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
                  >
                    Update
                  </button>
                </div>
              </div>
            )}
              {fourthFooter && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
                onClick={handleFirstClose}
              >
                <div
                  className="bg-white p-6 rounded-lg shadow-lg w-1/2 "
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-lg font-semibold text-red-500 mb-4 text-center">Fourth Footer Update</h3>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Line 1:</label>
                    <input
                      placeholder="Line1"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Line 2:</label>
                    <input
                      placeholder="Line2"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Line 3:</label>
                    <input
                      placeholder="Line3"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Line 4:</label>
                    <input
                      placeholder="Line4"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <button
                    onClick={handleFourthClose}
                    className="mt-7 ml-0 px-10 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
                  >
                    Update
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Style;

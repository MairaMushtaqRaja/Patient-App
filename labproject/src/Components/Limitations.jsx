import { useState } from 'react'
import AdminNavBar from './AdminNavbar'
function Limitations() {
    const [activeTab, setActiveTab] = useState('New Test');
    const [discount, setDiscount] = useState('');
    const [ref, setRef] = useState('');
    const [tableData, setTableData] = useState([]);
    const [modal, setModalOpen] = useState(false);
    const handleDiscount = (e) => setDiscount(e.target.value);
    const handleRef = (e) => setRef(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            discount,
            ref
        };
        setTableData([...tableData, newEntry]);
        setModalOpen(false);
    };
    const handleEditTestName = (index) => {
        setEditIndex(index);
        setEditEntry({ ...tableData[index] });
        setModalOpen(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditEntry({ ...editEntry, [name]: value });
    }
    const [editIndex, setEditIndex] = useState(null);
    const [editEntry, setEditEntry] = useState({
        discount: '',
        ref: ''
    });
    const handleUpdateTestName = () => {
        const updatedTableData = [...tableData];
        updatedTableData[editIndex] = editEntry;
        setTableData(updatedTableData);
        setModalOpen(false);
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
                            Discount Limit
                        </button>
                        <button
                            onClick={() => setActiveTab('Update Test')}
                            className={`px-4 py-2 rounded-lg ${activeTab === 'Update Test' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-950'}`}
                        >
                            Update Discount Limit
                        </button>
                        <button
                            onClick={() => setActiveTab('Discount')}
                            className={`px-4 py-2 rounded-lg ${activeTab === 'Discount' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-950'}`}
                        >
                            Get Discount OTP
                        </button>
                    </div>
                </div>
                {activeTab === 'New Test' && (
                    <div className="bg-slate-100 p-4 rounded-lg">
                        <div className="w-full border-b border-blue-900 mt-0"></div>
                        <div className="flex-1 mt-4">
                            <label className="block text-blue-950 ml-2">Maximum Discount Limit:</label>
                            <input
                                placeholder="Discount"
                                value={discount}
                                onChange={handleDiscount}
                                type="number"
                                className="w-full  text-end px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                            />
                        </div>
                        <div className="mt-4 flex-1">
                            <label className="block text-blue-950 ml-2 font-bold">Printing By Pass</label>
                        </div>
                        <div className="mt-4 flex-1">
                            <label className="block text-blue-950 ml-2">Ref By</label>
                            <select
                                name="referredBy"
                                value={ref}
                                onChange={handleRef}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                            >
                                <option value="Self">Self</option>
                                <option value="Dr.Smith">Dr.smiths</option>
                                <option value="Dr.John">Dr.John</option>
                                <option value="Dr.Jane">Dr.Jane</option>
                                <option value="Dr.Doe">Dr.Doe</option>
                            </select>
                        </div>
                        <button className="px-4 py-2 bg-blue-900 text-white rounded-lg mt-10 mb-5">
                            Print Without Payment
                        </button>
                        <button className="px-4 py-2 bg-blue-900 text-white rounded-lg mt-10 ml-10 mb-5" 
                        onClick={handleSubmit}
                        >
                            Update
                        </button>
                    </div>
                )}
                {activeTab === 'Update Test' && (
                    <div className="bg-slate-100 p-4 rounded-lg">
                        <div className="w-full border-b border-blue-900 mt-0 mb-4"></div>
                        <div className="mt-4 ml-0 p-4 bg-white shadow-md rounded-lg">
              <table className="table-auto w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white ">
                    <th className="px-4 py-3 text-start">Maximum Discount</th>
                    <th className="px-4 py-3 text-start ">Ref By</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((entry, index) => (
                    <tr key={index} onClick={() => handleEditTestName(index)} className="cursor-pointer hover:bg-gray-300">
                      <td className="border border-gray-400 px-4 py-2">{entry.discount}</td>
                      <td className="border border-gray-400 px-4 py-2">{entry.ref}</td>
         
                    </tr>
                  ))}
                </tbody>
              </table>
              {modal && (

                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setModalOpen(false)}>
                  <div className="bg-gray-100 p-4 rounded-lg w-120" onClick={(e) => e.stopPropagation()}>
                    <h3 className="text-lg font-semibold mt-5 text-red-500 text-center">Update Lab  Details</h3>
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">Doctor Name</label>
                      <input
                        type="number"
                        name="discount"
                        value={editEntry.discount}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter new discount value"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">Ref By</label>
                      <input
                        type="text"
                        name="ref"
                        value={editEntry.ref}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter reference"
                      />
                    </div>
                    <div className="flex justify-end mt-4">
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded-lg  hover:bg-blue-500"
                        onClick={handleUpdateTestName}
                      >
                        Update
                      </button>
                      <button
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg ml-2 hover:bg-blue-900"
                        onClick={() => setModalOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                 
                  </div>
                </div>
              )}
            </div>
                    </div>
                )}
                {activeTab === 'Discount' && (
                    <div className="bg-slate-100 p-4 rounded-lg">
                        <div className="w-full border-b border-blue-900 mt-0 mb-4"></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Limitations
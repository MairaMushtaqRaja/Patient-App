import { useState } from 'react'
import AdminNavBar from './AdminNavbar'
function Accounts() {
  const [activeTab, setActiveTab] = useState('New Test');
  const [modalOpen, setModalOpen] = useState(false);
  const [isCategoryModal, setCategoryModal] = useState(false);
  const [isSpecificModal, setSpecificModal] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [idModal, setIdModal] = useState(false);
  const [lab, setLab] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [commission, setCommission] = useState('');
  const [Default, setDefault] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const [balance,setBalance]=useState('');
  const [title,setTitle]=useState('');
  const [address,setAddress]=useState('');
  const[id,setId]=useState(''); 
  const [tableData, setTableData] = useState([]);
  const [modal, setIsModalOpen] = useState(false);
  const handleLabChange = (e) => setLab(e.target.value);
  const handlePhoneChange = (e) => setPhoneNumber(e.target.value);
  const handleDoctorName = (e) => setDoctorName(e.target.value);
  const handleCommission = (e) => setCommission(e.target.value);
  const handleDefault = (e) => setDefault(e.target.value);
  const handleUser = (e) => setUser(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleType = (e) => setType(e.target.value);
const handleBalance=(e)=>setBalance(e.target.value);
const handleTitle=(e)=>setTitle(e.target.value);
const handleAddress=(e)=>setAddress(e.target.value);
const handleId=(e)=>setId(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      lab,
      phoneNumber,
      doctorName,
      commission,
      Default,
      user,
      password,
      type,
      balance,
      title,
      address,
      id
    };
    setTableData([...tableData, newEntry]);
    setModalOpen(false);
  };
  const handleEditTestName = (index) => {
    setEditIndex(index);
    setEditEntry({ ...tableData[index] });
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditEntry({ ...editEntry, [name]: value });
  };
  const handleIdModalOpen = () => {
    setIdModal(true);
  }
  const handleIdModalClose = () => {
    setIdModal(false);
  }
  const handleUpdateTestName = () => {
    const updatedTableData = [...tableData];
    updatedTableData[editIndex] = editEntry;
    setTableData(updatedTableData);
    setIsModalOpen(false);
  };
  const [editIndex, setEditIndex] = useState(null);
  const [editEntry, setEditEntry] = useState({
    lab: '',
    phoneNumber: '',
    doctorName: '',
    commission: '',
    Default: '',
    user: '',
    password: '',
    type: '',
    balance:'',
    title:'',
    address:'',
    id:'',
  });
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleOpenCategory = () => setCategoryModal(true);
  const handleCloseCategory = () => setCategoryModal(false);
  const handleOpenSpecific = () => setSpecificModal(true);
  const handleCloseSpecific = () => setSpecificModal(false);
  const handleUpdate = () => setUpdated(true);

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
              Lab Accounts
            </button>
            <button
              onClick={() => setActiveTab('Update Test')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'Update Test' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-950'}`}
            >
              Doctor Account
            </button>
            <button
              onClick={() => setActiveTab('Discount')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'Discount' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-950'}`}
            >
              Discount Category
            </button>
            <button
              onClick={() => setActiveTab('User')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'User' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-950'}`}
            >
              User
            </button>
            <button
              onClick={() => setActiveTab('Account')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'Account' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-950'}`}
            >
              Account Payable
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
                  placeholder="Enter performed by" onClick={handleOpenModal}></input>
                <label className="ml-2 text-blue-900"> Outsourced Lab</label>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <div>
                <input
                  type="radio"
                  placeholder="Enter performed by"></input>
                <label className="ml-2 text-blue-900"> Client Lab</label>
              </div>
            </div>
            {modalOpen && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
                onClick={handleCloseModal}
              >
                <div
                  className="bg-white p-6 rounded-lg shadow-lg w-1/2 "
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-lg font-semibold text-red-500 mb-4 text-center">Outsource Lab</h3>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Lab:</label>
                    <input
                      placeholder="Lab Name"
                      value={lab}
                      onChange={handleLabChange}
                      type="text"
                      className="w-full text-start px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Phone Number:</label>
                    <input
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      type="number"
                      className="w-full text-start px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="mt-7 ml-0 px-10 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
            <button className="mt-7 ml-5 px-10 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200 "
              onClick={handleIdModalOpen}
            >
              Update
            </button>
            {idModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleIdModalClose}>
                <div className="bg-gray-100 p-4 rounded-lg w-120" onClick={(e) => e.stopPropagation()}>
                  <h3 className="text-lg font-semibold mt-5 text-red-500 text-center">Update Id </h3>
                  <div className="mt-4">
                    <label className="ml-2 text-blue-900">Lab Id</label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                      placeholder="Enter new test name"
                    />
                  </div>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg  hover:bg-blue-500 mt-10"
                    onClick={handleIdModalClose}
                  >
                    Update
                  </button>
                </div>
              </div>
            )}
            <div className="mt-4 ml-0 p-4 bg-white shadow-md rounded-lg">
              <table className="table-auto w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white ">
                    <th className="px-4 py-3 text-start">Lab Name</th>
                    <th className="px-4 py-3 text-start ">Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((entry, index) => (
                    <tr key={index} onClick={() => handleEditTestName(index)} className="cursor-pointer hover:bg-gray-300">
                      <td className="border border-gray-400 px-4 py-2">{entry.lab}</td>
                      <td className="border border-gray-400 px-4 py-2">{entry.phoneNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {modal && (

                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setIsModalOpen(false)}>
                  <div className="bg-gray-100 p-4 rounded-lg w-120" onClick={(e) => e.stopPropagation()}>
                    <h3 className="text-lg font-semibold mt-5 text-red-500 text-center">Update Lab  Details</h3>
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">Lab Name</label>
                      <input
                        type="text"
                        name="lab"
                        value={editEntry.lab}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter new test name"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">Phone Number</label>
                      <input
                        type="number"
                        name="phoneNumber"
                        value={editEntry.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter original price"
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
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                    {idModal && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleIdModalClose}>
                        <div className="bg-gray-100 p-4 rounded-lg w-120" onClick={(e) => e.stopPropagation()}>
                          <h3 className="text-lg font-semibold mt-5 text-red-500 text-center">Update Id </h3>
                          <div className="mt-4">
                            <label className="ml-2 text-blue-900">Lab Id</label>
                            <input
                              type="number"
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                              placeholder="Enter new test name"
                            />
                          </div>
                          <button
                            className="px-4 py-2 bg-red-500 text-white rounded-lg  hover:bg-blue-500 mt-10"
                            onClick={handleIdModalClose}
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {activeTab === 'Update Test' && (
          <div className="bg-slate-100 p-4 rounded-lg">
            <div className="w-full border-b border-blue-900 mt-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-4">
              <div>
                <label className="block text-blue-950 ml-2">Doctor Name:</label>
                <input
                  type="text"
                  value={doctorName}
                  onChange={handleDoctorName}
                  className="w-full mt-3  text-start px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                  placeholder="Doctor Name"
                />

              </div>
              <div>
                <label className="block text-blue-950 ml-3">Phone Number:</label>
                <input
                  placeholder="Phone Number"
                  type="number"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className="w-full   px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                />
              </div>
              <div>
                <label className="block text-blue-950 ml-3">Commission %age</label>
                <input
                  placeholder="Priority"
                  type="number"
                  value={commission}
                  onChange={handleCommission}
                  className="w-full px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                />
              </div>
            </div>
            <div>
              <label className="block text-blue-950 ml-3">Default Category Selection</label>
              <select
                value={Default}
                onChange={handleDefault}
                className="w-full mt-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950">
                <option value="">No Discount</option>
                <option value="Text">10%</option>
                <option value="Range">20%</option>
                <option value="Numeric">30%</option>
              </select>
            </div>
            <button
              onClick={handleSubmit}
              className="mt-7 ml-0 px-10 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-blue-500 transition duration-200"
            >
              Save
            </button>
            <button
              className="mt-7 ml-10 px-10 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
              onClick={handleIdModalOpen}
            >
              Update
            </button>
            {idModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleIdModalClose}>
                <div className="bg-gray-100 p-4 rounded-lg w-120" onClick={(e) => e.stopPropagation()}>
                  <h3 className="text-lg font-semibold mt-5 text-red-500 text-center">Update Id </h3>
                  <div className="mt-4">
                    <label className="ml-2 text-blue-900">Lab Id</label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                      placeholder="Enter new test name"
                    />
                  </div>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg  hover:bg-blue-500 mt-10"
                    onClick={handleIdModalClose}
                  >
                    Update
                  </button>
                </div>
              </div>
            )}
            <div className="mt-4 ml-0 p-4 bg-white shadow-md rounded-lg">
              <table className="table-auto w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white ">
                    <th className="px-4 py-3 text-start">Doctor Name</th>
                    <th className="px-4 py-3 text-start ">Phone Number</th>
                    <th className="px-4 py-3 text-start ">Commssion</th>
                    <th className="px-4 py-3 text-start ">Default Category</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((entry, index) => (
                    <tr key={index} onClick={() => handleEditTestName(index)} className="cursor-pointer hover:bg-gray-300">
                      <td className="border border-gray-400 px-4 py-2">{entry.doctorName}</td>
                      <td className="border border-gray-400 px-4 py-2">{entry.phoneNumber}</td>
                      <td className="border border-gray-400 px-4 py-2">{entry.commission}</td>
                      <td className="border border-gray-400 px-4 py-2">{entry.Default}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {modal && (

                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setIsModalOpen(false)}>
                  <div className="bg-gray-100 p-4 rounded-lg w-120" onClick={(e) => e.stopPropagation()}>
                    <h3 className="text-lg font-semibold mt-5 text-red-500 text-center">Update Lab  Details</h3>
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">Doctor Name</label>
                      <input
                        type="text"
                        name="doctorName"
                        value={editEntry.doctorName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter new test name"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">Phone Number</label>
                      <input
                        type="number"
                        name="phoneNumber"
                        value={editEntry.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter original price"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">Commission</label>
                      <input
                        type="number"
                        name="commission"
                        value={editEntry.commission}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter original price"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">Default</label>
                      <input
                        type="number"
                        name="Default"
                        value={editEntry.Default}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter original price"
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
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                    {idModal && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleIdModalClose}>
                        <div className="bg-gray-100 p-4 rounded-lg w-120" onClick={(e) => e.stopPropagation()}>
                          <h3 className="text-lg font-semibold mt-5 text-red-500 text-center">Update Id </h3>
                          <div className="mt-4">
                            <label className="ml-2 text-blue-900">Lab Id</label>
                            <input
                              type="number"
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                              placeholder="Enter new test name"
                            />
                          </div>
                          <button
                            className="px-4 py-2 bg-red-500 text-white rounded-lg  hover:bg-blue-500 mt-10"
                            onClick={handleIdModalClose}
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {activeTab === 'Discount' && (
          <div className="bg-slate-100 p-4 rounded-lg">
            <div className="w-full border-b border-blue-900 mt-0"></div>
            <div>
              <label className="block text-blue-950 ml-3 mt-4">Discount Category</label>
              <input
                placeholder="%age"
                type="number"
                className="w-full px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
              />
            </div>
            <div className="flex flex-col mt-5">
              <div>
                <input
                  type="radio"
                  placeholder="Enter performed by" onClick={handleOpenCategory}></input>
                <label className="ml-2 text-blue-900">For All test com %age</label>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <div>
                <input
                  type="radio"
                  placeholder="Enter performed by" onClick={handleOpenSpecific}></input>
                <label className="ml-2 text-blue-900"> For Specific Test</label>
              </div>
            </div>
            {isCategoryModal && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
                onClick={handleCloseCategory}
              >
                <div
                  className="bg-white p-6 rounded-lg shadow-lg w-1/2 "
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-lg font-semibold text-red-500 mb-4 text-center">Commission %age</h3>
                  <div className="mt-3">
                    <label className="ml-2 text-blue-900 font-semibold">Comission %age:</label>

                    <input
                      placeholder="%age"
                      type="number"
                      className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>

                  <button
                    onClick={handleCloseCategory}
                    className="mt-7 ml-0 px-10 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
            {isSpecificModal && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
                onClick={handleCloseSpecific}
              >
                <div
                  className="bg-white p-6 rounded-lg shadow-lg w-1/2 "
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-lg font-semibold text-red-500 mb-4 text-center">Specific Test</h3>
                  <div className="flex-1">
                    <label className="block text-blue-900 ml-2">Test Name:</label>
                    <select
                      name="testName"
                      className="w-full px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    >
                      <option value="">Test Name</option>
                      <option value="Blood">Blood</option>
                      <option value="Urine">Urine</option>
                      <option value="Saliva">Saliva</option>
                      <option value="Tissue">Tissue</option>
                      <option value="Stool">Stool</option>
                      <option value="Sputum">Sputum</option>
                      <option value="Cerebrospinal Fluid">Cerebrospinal Fluid</option>
                      <option value="Swabs">Swabs</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-blue-900 ml-3 mt-4">Discount Price</label>
                    <input
                      placeholder="%age"
                      type="number"
                      className="w-full px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                    />
                  </div>
                  <div className="flex">
                    <div className="mt-3">
                      <label className="ml-2 text-blue-900 ">Comission %age:</label>

                      <input
                        placeholder="%age"
                        type="number"
                        className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                      />
                    </div>
                    <button className="ml-10 p-2 mt-10 bg-red-500 text-white rounded-lg hover:bg-blue-700 w-[9vh] h-[7vh]">
                      +
                    </button>
                  </div>
                  <button
                    onClick={handleCloseSpecific}
                    className="mt-7 ml-0 px-10 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
            <button className="mt-10 ml-0 px-10 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
              onClick={handleUpdate}
            >
              Update Category
            </button>
            <button className="mt-7 ml-10 px-10 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
              onClick={handleOpenSpecific}
            >
              Update Test Com.
            </button>
            <button
              className="mt-2 ml-10 px-10 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-blue-500 transition duration-200"
            >
              Save
            </button>
            {updated && (
              <div className="mt-10 ml-0 p-4 bg-white shadow-md rounded-lg">
                <table className="table-auto w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-600 text-white ">
                      <th className="px-4 py-3 text-start">Category Name</th>
                      <th className="px-4 py-3 text-start ">Type</th>
                      <th className="px-4 py-3 text-start ">Discount</th>
                      <th className="px-4 py-3 text-start ">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

        )}
        {activeTab === 'User' && (
          <div className="bg-slate-100 p-4 rounded-lg">
            <div className="w-full border-b border-blue-900 mt-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-4">
              <div>
                <label className="block text-blue-950 ml-2">User Name:</label>
                <input
                  type="text"
                  value={user}
                  onChange={handleUser}
                  className="w-full mt-3  text-start px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                  placeholder="User Name"
                />

              </div>
              <div>
                <label className="block text-blue-950 ml-3">Password:</label>
                <input
                  placeholder="Password"
                  type="number"
                  value={password}
                  onChange={handlePassword}
                  className="w-full   px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                />
              </div>
              <div>
                <label className="block text-blue-950 ml-3">Type:</label>
                <select
                  value={type}
                  onChange={handleType}
                  className="w-full mt-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950">
                  <option value=""></option>
                  <option value="payment">Payment</option>
                  <option value="ReportEntry">Report Entry</option>
                  <option value="Report Verification">Report Verification</option>
                  <option value="Store Keeper">Store Keeper</option>
                  <option value="Accounts">Accounts</option>
                  <option value="Report Editor">Report Editor</option>
                </select>
              </div>
            </div>

            <button className="mt-7 ml-0 px-10 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-blue-500 transition duration-200"
              onClick={handleSubmit}
            >
              Save
            </button>
            <div className="mt-4 ml-0 p-4 bg-white shadow-md rounded-lg">
              <table className="table-auto w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white ">
                    <th className="px-4 py-3 text-start">User Name</th>
                    <th className="px-4 py-3 text-start ">Password</th>
                    <th className="px-4 py-3 text-start ">Type</th>

                  </tr>
                </thead>
                <tbody>
                  {tableData.map((entry, index) => (
                    <tr key={index} onClick={() => handleEditTestName(index)} className="cursor-pointer hover:bg-gray-300">
                      <td className="border border-gray-400 px-4 py-2">{entry.user}</td>
                      <td className="border border-gray-400 px-4 py-2">{entry.password}</td>
                      <td className="border border-gray-400 px-4 py-2">{entry.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {modal && (

                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setIsModalOpen(false)}>
                  <div className="bg-gray-100 p-4 rounded-lg w-120" onClick={(e) => e.stopPropagation()}>
                    <h3 className="text-lg font-semibold mt-5 text-red-500 text-center">Update Lab  Details</h3>
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">User Name</label>
                      <input
                        type="text"
                        name="user"
                        value={editEntry.user}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter new test name"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">Password</label>
                      <input
                        type="number"
                        name="password"
                        value={editEntry.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter original price"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">Type</label>
                      <input
                        type="text"
                        name="type"
                        value={editEntry.type}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter Type"
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
                        onClick={() => setIsModalOpen(false)}
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
        {activeTab === 'Account' && (
          <div className="bg-slate-100 p-4 rounded-lg">
            <div className="w-full border-b border-blue-900 mt-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-4">
              <div>
                <label className="block text-blue-950 ml-2">Person Name:</label>
                <input
                  type="text"
                  value={user}
                  onChange={handleUser}
                  className="w-full mt-3  text-start px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                  placeholder="Person Name"
                />

              </div>
              <div>
                <label className="block text-blue-950 ml-3">Phone Number:</label>
                <input
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  type="number"
                  className="w-full   px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                />
              </div>
              <div>
                <label className="block text-blue-950 ml-3">Opening Balance</label>
                <input
                  placeholder="Opening Balance"
                  type="number"
                  value={balance}
                  onChange={handleBalance}
                  className="w-full px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-4">
              <div>
                <label className="block text-blue-950 ml-2">Account Title:</label>
                <input
                  type="text"
                  value={title}
                  onChange={handleTitle}
                  className="w-full mt-3  text-start px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                  placeholder="Account Title"
                />

              </div>
              <div>
                <label className="block text-blue-950 ml-3">Address:</label>
                <input
                  placeholder="Address"
                  type="text"
                  value={address}
                  onChange={handleAddress}
                  className="w-full   px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                />
              </div>
              <div>
                <label className="block text-blue-950 ml-3">ID:</label>
                <input
                  placeholder="ID"
                  value={id}
                  onChange={handleId}
                  type="number"
                  className="w-full px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                />
              </div>
            </div>
            <button
            onClick={handleSubmit}
              className="mt-7 ml-0 px-10 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-blue-500 transition duration-200"
            >
              Save
            </button>
            <button
              className="mt-7 ml-10 px-10 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
            >
              Update
            </button>
            <div className="mt-4 ml-0 p-4 bg-white shadow-md rounded-lg">
              <table className="table-auto w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white ">
                    <th className="px-4 py-3 text-start">Person Name</th>
                    <th className="px-4 py-3 text-start ">Phone Number</th>
                    <th className="px-4 py-3 text-start ">Opening Balance</th>
                    <th className="px-4 py-3 text-start ">Account Title</th>
                    <th className="px-4 py-3 text-start ">Address</th>
                    <th className="px-4 py-3 text-start ">Id</th>

                  </tr>
                </thead>
                <tbody>
                  {tableData.map((entry, index) => (
                    <tr key={index} onClick={() => handleEditTestName(index)} className="cursor-pointer hover:bg-gray-300">
                      <td className="border border-gray-400 px-4 py-2">{entry.user}</td>
                      <td className="border border-gray-400 px-4 py-2">{entry.phoneNumber}</td>
                      <td className="border border-gray-400 px-4 py-2">{entry.balance}</td>
                      <td className="border border-gray-400 px-4 py-2">{entry.title}</td> 
                      <td className="border border-gray-400 px-4 py-2">{entry.address}</td>
                      <td className="border border-gray-400 px-4 py-2">{entry.id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {modal && (

                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setIsModalOpen(false)}>
                  <div className="bg-gray-100 p-4 rounded-lg w-120" onClick={(e) => e.stopPropagation()}>
                    <h3 className="text-lg font-semibold mt-5 text-red-500 text-center">Update Lab  Details</h3>
                    <div className="mt-5 grid grid-cols-3 gap-4">
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">Person Name</label>
                      <input
                        type="text"
                        name="user"
                        value={editEntry.user}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter new test name"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">Phone Number</label>
                      <input
                        type="number"
                        name="phoneNumber"
                        value={editEntry.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter original price"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">Opening Balancing</label>
                      <input
                        type="number"
                        name="balance"
                        value={editEntry.balance}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter Type"
                      />
                    </div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-4">
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">Account Title</label>
                      <input
                        type="text"
                        name="title"
                        value={editEntry.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter Type"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={editEntry.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter Type"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="ml-2 text-blue-900">ID</label>
                      <input
                        type="number"
                        name="id"
                        value={editEntry.id}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                        placeholder="Enter Type"
                      />
                    </div>
</div>
                    <div className="flex justify-end mt-10">
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded-lg  hover:bg-blue-500"
                        onClick={handleUpdateTestName}
                      >
                        Update
                      </button>
                      <button
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg ml-2 hover:bg-blue-900"
                        onClick={() => setIsModalOpen(false)}
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
      </div>
    </div>
  )
}

export default Accounts
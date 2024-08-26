import  { useState, useEffect } from 'react';
import FloatingInput from './FloatingInput';
const dummyData = [
  { name: 'John Doe', phone: '1234567890', address: '123 Street', gender: 'Male', age: 30, ageUnit: 'Years', referredBy: 'Dr. Smith', ref: '001', patientId: 'P001', visitDate: '2023-08-01', pannel: 'A', codeNo: 'C001', cnic: '12345-6789012-3' },
  { name: 'Jane Doe', phone: '0987654321', address: '456 Avenue', gender: 'Female', age: 25, ageUnit: 'Months', referredBy: 'Dr. John', ref: '002', patientId: 'P002', visitDate: '2023-08-02', pannel: 'B', codeNo: 'C002', cnic: '98765-4321098-7' },
];
const availableTests = ['BloodPressure', 'Urine', 'X-Ray', 'BloodTest'];
const testsRequiringImages = ['Blood Pressure', 'Urine'];

function Patient() {
  const [activeTab, setActiveTab] = useState('personalInfo');
  const [doctors, setDoctors] = useState([]); // State to hold the list of doctors
 
  const [patientData, setPatientData] = useState({
    name: '',
    address: '',
    phone: '',
    gender: '',
    age: '',
    ageUnit: '',
    referredBy: '',
    ref: '',
    patientId: '',
    totalBill: '',
    cash: '',
    balance: '',
    outsourceSample: '',
    discount: '',
  });
  const [suggestions, setSuggestions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDoctorName, setNewDoctorName] = useState('');
  const [testDetails, setTestDetails] = useState({
    testName: '',
    price: '',
    discountPrice: '',
    reportingDate: '',
    labId: '',
    entryPerson: '',
    codeNo: '',
    testDoneBy: '',
  });
  const [tests, setTests] = useState([]);
  const [showImageOptions, setShowImageOptions] = useState(false);
  const [imageSource, setImageSource] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [name]: name === 'discount' ? parseFloat(value) || 0 : value,
    }));
  };
  const handleAddDoctor = () => {
    if (newDoctorName.trim()) {
      setDoctors([...doctors, newDoctorName.trim()]);
      setNewDoctorName(''); // Reset the input
      closeModal(); // Close the modal
    }
  };
  

  useEffect(() => {
    const calculatedTotalBill = tests.reduce((acc, test) => acc + test.totalBill, 0);

    setPatientData((prevData) => ({
      ...prevData,
      totalBill: calculatedTotalBill,
      balance: prevData.discount > 0 ? Math.max(0, calculatedTotalBill - prevData.discount) : 0,
      cash: prevData.discount > 0 ? Math.max(0, calculatedTotalBill - prevData.discount) : 0,
    }));
  }, [tests, patientData.discount]);

  const handleTestDetailsChange = (e) => {
    const { name, value } = e.target;
    setTestDetails({ ...testDetails, [name]: value });
    if (name === 'testName') {
      setShowImageOptions(testsRequiringImages.includes(value));
    }
  };

  const addTestToTable = () => {
    const originalPrice = parseFloat(testDetails.price) || 0;
    const discountPrice = parseFloat(testDetails.discountPrice) || 0;
    const totalBill = originalPrice - discountPrice;

    const newTest = {
      ...testDetails,
      totalBill: totalBill < 0 ? 0 : totalBill,
    };
    setTests([...tests, newTest]);
    setTestDetails({
      testName: '',
      price: '',
      discountPrice: '',
      reportingDate: '',
      labId: '123',
      entryPerson: '',
      codeNo: '',
      testDoneBy: '',
    });
    setShowImageOptions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setPatientData(suggestion);
    setSuggestions([]);
  };

  const handlePatientNameChange = (e) => {
    const { value } = e.target;
    setPatientData({ ...patientData, name: value });

    if (value.length > 0) {
      const filteredSuggestions = dummyData.filter((data) =>
        data.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    setPatientData({ ...patientData, phone: value });

    const matchedData = dummyData.find((data) => data.phone === value);
    if (matchedData) {
      setPatientData(matchedData);
    }
  };

  const handleImageCapture = () => {
    alert('Camera opened (not implemented in this demo)');
  };

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSource(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewDoctorName('');
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100 mt-20 rounded-md">
      {/* Tabs Section */}
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="flex space-x-4 mt-6">
          <button
            onClick={() => setActiveTab('personalInfo')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'personalInfo' ? 'bg-blue-950 text-white' : 'bg-gray-200 text-blue-950'}`}
          >
            Patient Personal Info
          </button>
          <button
            onClick={() => setActiveTab('testDetail')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'testDetail' ? 'bg-blue-950 text-white' : 'bg-gray-200 text-blue-950'}`}
          >
            Test Detail
          </button>
        </div>
      </div>

      {/* Billing Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6 bg-slate-300 p-4 rounded-lg">
      <div className="flex flex-col">
        <FloatingInput
          label="Cash"
          value={patientData.cash}
          onChange={(e) => handleInputChange({ target: { name: 'cash', value: e.target.value } })}
          type="number"
        />
      </div>
      <div className="flex flex-col">
        <FloatingInput
          label="Discount"
          value={patientData.discount}
          onChange={(e) => handleInputChange({ target: { name: 'discount', value: e.target.value } })}
          type="number"
        />
      </div>
      <div className="flex flex-col">
        <FloatingInput
          label="Balance"
          value={patientData.balance}
          onChange={(e) => handleInputChange({ target: { name: 'balance', value: e.target.value } })}
          type="number"
        />
      </div>
      <div className="flex flex-col">
        <FloatingInput
          label="Total Bill"
          value={patientData.totalBill}
          readOnly
          onChange={() => {}} // No change handler needed for readOnly input
        />
      </div>
      <div className="flex flex-col">
        <label className="block text-blue-950 text-start ml-1">Outsource Sample:</label>
        <input
          type="checkbox"
          name="outsourceSample"
          checked={patientData.outsourceSample}
          onChange={handleInputChange}
        />
      </div>
    </div>


      {/* Personal Info Section */}
      {activeTab === 'personalInfo' && (
  <div className="bg-slate-200 p-4 rounded-lg">
    {/* Phone Number and Lab ID Fields */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-blue-950">Phone:</label>
        <input
          type="text"
          name="phone"
          value={patientData.phone}
          onChange={handlePhoneChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
          placeholder="Enter phone..."
        />
      </div>
      <div>
        <label className="block text-blue-950">Lab ID:</label>
        <input
          type="text"
          name="labId"
          value={patientData.labId}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
          placeholder="123"
        />
      </div>
    </div>

    {/* Patient Name Field */}
    <div className="flex flex-col mb-4">
      <label className="block text-blue-950">Patient Name:</label>
      <input
        type="text"
        name="name"
        value={patientData.name}
        onChange={handlePatientNameChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
        placeholder="Enter patient name..."
      />
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border rounded-lg shadow-md mt-1 max-h-60 overflow-y-auto z-10">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.name}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 hover:bg-blue-950 hover:text-white cursor-pointer"
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* Other Fields */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
     
      <div>
        <label className="block text-blue-950">Gender:</label>
        <select
          name="gender"
          value={patientData.gender}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label className="block text-blue-950">Age:</label>
        <input
          type="number"
          name="age"
          value={patientData.age}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
          placeholder="Enter age..."
        />
      </div>
      <div>
        <select
          name="ageUnit"
          value={patientData.ageUnit}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950 mt-6"
        >
          <option value="">Select age unit</option>
          <option value="Years">Years</option>
          <option value="Months">Months</option>
        </select>
      </div>
      <div>
        <label className="block text-blue-950">Referred By:</label>
        <div className="flex items-center">
          <select
            name="referredBy"
            value={patientData.referredBy}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
          >
            <option value="">Select Doctor</option>
            <option value="">Dr.smiths</option>
            <option value="">Dr.John</option>
            <option value="">Dr.Jane</option>
            <option value="">Dr.Doe</option>
            {doctors.map((doctor) => (
              <option key={doctor} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
          <button onClick={openModal} className="ml-2 p-2 bg-blue-950 text-white rounded-lg hover:bg-blue-700 w-1/4">
            +
          </button>
        </div>
      </div>
    </div>

    {/* Modal for Adding Doctor */}
    {isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded-lg w-96">
          <h3 className="text-lg font-semibold">Add Doctor</h3>
          <input
            type="text"
            value={newDoctorName}
            onChange={(e) => setNewDoctorName(e.target.value)}
            placeholder="Enter doctor's name"
            className="w-full p-2 border rounded-lg"
          />
          <div className="flex justify-between mt-4">
            <button onClick={handleAddDoctor} className="px-4 py-2 bg-blue-950 text-white rounded-lg">
              Add
            </button>
            <button onClick={closeModal} className="px-4 py-2 bg-gray-500 text-white rounded-lg">
              Cancel
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
)}
      {/* Test Detail Section */}
      {activeTab === 'testDetail' && (
        <div className="bg-slate-200 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-blue-950">Test Name:</label>
              <select
                name="testName"
                value={testDetails.testName}
                onChange={handleTestDetailsChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
              >
                <option value="">Select test</option>
                {availableTests.map((test) => (
                  <option key={test} value={test}>
                    {test}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-blue-950">Price:</label>
              <input
                type="number"
                name="price"
                value={testDetails.price}
                onChange={handleTestDetailsChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                placeholder="Enter price..."
              />
            </div>
            <div>
              <label className="block text-blue-950">Discount Price:</label>
              <input
                type="number"
                name="discountPrice"
                value={testDetails.discountPrice}
                onChange={handleTestDetailsChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                placeholder="Enter discount price..."
              />
            </div>
            <div>
              <label className="block text-blue-950">Reporting Date:</label>
              <input
                type="date"
                name="reportingDate"
                value={testDetails.reportingDate}
                onChange={handleTestDetailsChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
              />
            </div>
          </div>

          {/* Image Options */}
          {showImageOptions && (
            <div className="mb-4">
              <label className="block text-blue-950">Image Options:</label>
              <button onClick={handleImageCapture} className="px-4 py-2 bg-blue-950 text-white rounded-lg mr-2">
                Capture Image
              </button>
              <input type="file" onChange={handleImageSelect} className="p-2 border rounded-lg" />
              {imageSource && (
                <img src={imageSource} alt="Captured" className="mt-2 w-24 h-24 object-cover border rounded-lg" />
              )}
            </div>
          )}

          <button
            onClick={addTestToTable}
            className="px-4 py-2 bg-blue-950 text-white rounded-lg"
          >
            Add Test
          </button>

          {/* Tests Table */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Tests Added:</h3>
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-300">
                  <th className="border border-gray-200 px-4 py-2">Test Name</th>
                  <th className="border border-gray-200 px-4 py-2">Price</th>
                  <th className="border border-gray-200 px-4 py-2">Discount Price</th>
                  <th className="border border-gray-200 px-4 py-2">Total Bill</th>
                </tr>
              </thead>
              <tbody>
                {tests.map((test, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="border border-gray-200 px-4 py-2">{test.testName}</td>
                    <td className="border border-gray-200 px-4 py-2">{test.price}</td>
                    <td className="border border-gray-200 px-4 py-2">{test.discountPrice}</td>
                    <td className="border border-gray-200 px-4 py-2">{test.price - test.discountPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

   
    </div>
  );
}

export default Patient;

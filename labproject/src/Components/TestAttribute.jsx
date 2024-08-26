import { useState } from 'react';
import AdminNavBar from './AdminNavbar';

function TestAttribute() {
    const [activeTab, setActiveTab] = useState('New Test');
    const [selectedTest, setSelectedTest] = useState('');
    const [attributeShortForm, setAttributeShortForm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [textOpen, setTextOpen] = useState(false);

    const [formData, setFormData] = useState({
        testName: '',
        attributeName: '',
        fieldType: '',
        defaultValue: '',
        unit: '',
        priority: '',
        maleRangeStart: '',
        maleRangeEnd: '',
        femaleRangeStart: '',
        femaleRangeEnd: '',
        maleRange: '',
        femaleRange: '',
        text: '',
        type1: '0'
    });
    const [editIndex, setEditIndex] = useState(null);
    const handleEditTestName = (index) => {
        setEditIndex(index);
        setEditEntry({ ...savedTests[index] });
        setIsModalOpen(true);
    };
    const handleUpdateTestName = () => {
        const updatedTableData = [...savedTests];
        updatedTableData[editIndex] = editEntry;
        setSavedTests(updatedTableData);
        setIsModalOpen(false);
    };
    const [editEntry, setEditEntry] = useState({
        attributeName: '',
        fieldType: '',
        defaultValue: '',
        unit: '',
        priority: '',
        maleRangeStart: '',
        maleRangeEnd: '',
        femaleRangeStart: '',
        femaleRangeEnd: '',
        maleRange: '',
        femaleRange: '',
        text: '',
        type1: '0'
    });
    const [savedTests, setSavedTests] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTestChange = (event) => {
        const testName = event.target.value;
        setSelectedTest(testName);
        setAttributeShortForm(getAttributeShortForm(testName));
        setFormData({ ...formData, attributeName: testName });
    };

    const openModal = () => {
        setIsModalOpen(true);
    };
    const openNumeric = () => {
        setModalOpen(true);
    };
    const closeNumeric = () => {
        setModalOpen(false);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const openText = () => {
        setTextOpen(true);
    };
    const closeText = () => {
        setTextOpen(false);
    }

    const getAttributeShortForm = (testName) => {
        switch (testName) {
            case 'Blood':
                return 'B';
            case 'Urine':
                return 'U';
            case 'Saliva':
                return 'S';
            case 'Tissue':
                return 'T';
            case 'Stool':
                return 'St';
            case 'Sputum':
                return 'Sp';
            case 'Cerebrospinal Fluid':
                return 'CF';
            case 'Swabs':
                return 'Sw';
            default:
                return '';
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditEntry({ ...editEntry, [name]: value });
    };
    const saveTest = () => {
        setSavedTests([...savedTests, formData]);
        setFormData({
            testName: '',
            attributeName: '',
            fieldType: '',
            defaultValue: '',
            unit: '',
            priority: '',
            maleRangeStart: '',
            maleRangeEnd: '',
            femaleRangeStart: '',
            femaleRangeEnd: '',
            maleRange: '',
            femaleRange: '',
            text: '',
            type1: '0'
        });
        setSelectedTest('');
        setAttributeShortForm('');
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
                            New Test Info
                        </button>
                        <button
                            onClick={() => setActiveTab('Update Test')}
                            className={`px-4 py-2 rounded-lg ${activeTab === 'Update Test' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-950'}`}
                        >
                            Update Test
                        </button>
                    </div>
                </div>
                {activeTab === 'New Test' && (
                    <div className="bg-slate-100 p-4 rounded-lg">
                        <div className="w-full border-b border-blue-900 mt-0"></div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 mt-4">
                            <div className="flex-1">
                                <label className="block text-blue-950 ml-2">Test Name:</label>
                                <select
                                    name="testName"
                                    value={formData.testName}
                                    onChange={handleInputChange}
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
                            <div className="flex-1">
                                <label className="block text-blue-950 ml-2">Attribute Name:</label>
                                <select
                                    value={selectedTest}
                                    onChange={handleTestChange}
                                    className="w-full px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                >
                                    <option value="">Attribute Name</option>
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
                            <div className="flex-1">
                                <input
                                    type="text"
                                    className="w-1/2 px-4 py-2 mt-9 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                    value={attributeShortForm}
                                    readOnly
                                />
                            </div>
                            <div className="ml-[-50%]">
                                <label className="block text-blue-950 ml-2">Field Type:</label>
                                <select
                                    name="fieldType"
                                    value={formData.fieldType}
                                    onChange={handleInputChange}
                                    className="w-full mt-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                >
                                    <option value="">Field Type</option>
                                    <option value="Text">Text</option>
                                    <option value="Range">Range</option>
                                    <option value="Numeric">Numeric</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-4">
                            <div>
                                <label className="block text-blue-950 ml-2">Default Value:</label>
                                <input
                                    name="defaultValue"
                                    value={formData.defaultValue}
                                    onChange={handleInputChange}
                                    type="number"
                                    className="w-full mt-3  text-end px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                    placeholder="Default Value"
                                />
                                <p className="ml-3 text-small">Comma separated multiple values</p>
                            </div>
                            <div>
                                <label className="block text-blue-950 ml-3">Unit</label>
                                <input
                                    name="unit"
                                    value={formData.unit}
                                    onChange={handleInputChange}
                                    placeholder="Unit"
                                    type="number"
                                    className="w-full  text-end px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                />
                            </div>
                            <div>
                                <label className="block text-blue-950 ml-3">Priority</label>
                                <input
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleInputChange}
                                    placeholder="Priority"
                                    type="number"
                                    className="w-full  text-end px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-blue-950 ml-3">Superscripts</label>
                        </div>
                        <div className="flex space-x-2 mb-4 mt-4">
                            {[...Array(10).keys()].map((number) => (
                                <button
                                    key={number}
                                    className="w-8 h-8 bg-gray-200 border rounded-lg  text-blue-900 focus:outline-none focus:ring-2 focus:bg-blue-900 focus:text-white "
                                >
                                    {number}
                                </button>
                            ))}
                        </div>
                        <div className="flex mb-4 mt-4 ml-1">
                            <div>
                                <label className="block text-blue-950 ml-2 mt-1">Normal Range</label>
                            </div>
                            <div className="ml-7 mt-1">
                                <input type="radio" name="rangeType" onClick={openModal} />
                                <label className="text-blue-950 ml-2">Range</label>
                            </div>
                            <div className="ml-7 mt-1">
                                <input type="radio" name="rangeType" onClick={openText} />
                                <label className="text-blue-950 ml-2">Text</label>
                            </div>
                            <div className="flex-1 ml-7 mt-1">
                                <input type="radio" name="rangeType" onClick={openNumeric} />
                                <label className="text-blue-950 ml-2">Numeric</label>
                            </div>
                        </div>
                        {textOpen && (
                            <div
                                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
                                onClick={closeText}
                            >
                                <div
                                    className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">Range</h3>

                                    <div className="mt-3">
                                        <label className="ml-2 text-blue-900 font-semibold">Male Range </label>
                                        <select
                                            name="text"
                                            value={formData.text}
                                            onChange={handleInputChange}
                                            className="w-full mt-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                        >
                                            <option value="">Text</option>
                                            <option value="Low">Low</option>
                                            <option value="Normal">Normal</option>
                                            <option value="High">High</option>
                                        </select>

                                    </div>
                                    <button
                                        onClick={closeText}
                                        className="mt-7 ml-5 px-10 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        )}
                        {modalOpen && (
                            <div
                                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
                                onClick={closeNumeric}
                            >
                                <div
                                    className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">Range</h3>

                                    <div className="mt-3">
                                        <label className="ml-2 text-blue-900 font-semibold">Male Range </label>

                                        <input
                                            name="maleRange"
                                            value={formData.maleRange}
                                            onChange={handleInputChange}
                                            placeholder="Male Range"
                                            type="number"
                                            className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                        />
                                    </div>



                                    <div className="mt-3">
                                        <label className="ml-2 text-blue-900 font-semibold">Female Range </label>

                                        <input
                                            name="femaleRange"
                                            value={formData.femaleRange}
                                            onChange={handleInputChange}
                                            placeholder="Female Range"
                                            type="number"
                                            className="w-full text-end px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                        />
                                    </div>
                                    <button
                                        onClick={closeNumeric}
                                        className="mt-7 ml-5 px-10 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        )}
                        {isModalOpen && (
                            <div
                                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
                                onClick={closeModal}
                            >
                                <div
                                    className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">Range</h3>
                                    <div className="flex flex-row gap-4">
                                        <div className="mt-3">
                                            <label className="ml-2 text-blue-900 font-semibold">Male Range </label>
                                            <label className="ml-2 text-red-600 font-semibold">(Start)</label>
                                            <input
                                                name="maleRangeStart"
                                                value={formData.maleRangeStart}
                                                onChange={handleInputChange}
                                                placeholder="Male Range"
                                                type="number"
                                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                            />
                                        </div>
                                        <div className="mt-3">
                                            <label className="ml-2 text-blue-900 font-semibold">Male Range </label>
                                            <label className="ml-2 text-red-600 font-semibold">(End)</label>
                                            <input
                                                name="maleRangeEnd"
                                                value={formData.maleRangeEnd}
                                                onChange={handleInputChange}
                                                placeholder="Male Range"
                                                type="number"
                                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        <div className="mt-3">
                                            <label className="ml-2 text-blue-900 font-semibold">Female Range </label>
                                            <label className="ml-2 text-red-600 font-semibold">(Start)</label>
                                            <input
                                                name="femaleRangeStart"
                                                value={formData.femaleRangeStart}
                                                onChange={handleInputChange}
                                                placeholder="Female Range"
                                                type="number"
                                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                            />
                                        </div>
                                        <div className="mt-3">
                                            <label className="ml-2 text-blue-900 font-semibold">Female Range</label>
                                            <label className="ml-2 text-red-600 font-semibold">(End)</label>
                                            <input
                                                name="femaleRangeEnd"
                                                value={formData.femaleRangeEnd}
                                                onChange={handleInputChange}
                                                placeholder="Female Range"
                                                type="number"
                                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="mt-7 ml-5 px-10 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        )}
                        <div className="flex flex-row ml-10">
                            <button
                                type="button"
                                onClick={saveTest}
                                className="px-4 py-2 bg-blue-900 text-white rounded-lg mt-10 mb-5"
                            >
                                Save Test
                            </button>
                        </div>
                    </div>
                )}
                {activeTab === 'Update Test' && (
                    <div className="bg-slate-100 p-4 rounded-lg">
                        <div className="w-full border-b border-blue-900 mt-0 mb-4"></div>
                        <div className="mt-4 ml-0 p-4 bg-white shadow-md rounded-lg">
                            <table className="w-full">
                                <thead className="bg-blue-900 text-white border-collapse  ">
                                    <tr>
                                        <th className="border-b py-0 px-2">Attribute </th>
                                        <th className="border-b py-0 px-2 ">Type</th>
                                        <th className="border-b py-0 px-2 ">Default </th>
                                        <th className="border-b py-0 px-2 ">Unit</th>
                                        <th className="border-b py-0 px-2 ">Priority</th>
                                        <th className="border-b py-0 px-2 ">Male St</th>
                                        <th className="border-b py-0 px-2 ">Male end</th>
                                        <th className="border-b py-0 px-2 ">FeMale St</th>
                                        <th className="border-b py-0 px-2">Female end</th>
                                        <th className="border-b py-0 px-2">Male Range</th>
                                        <th className="border-b py-0 px-2">Female Range</th>
                                        <th className="border-b py-0 px-2">Text</th>
                                        <th className="border-b py-0 px-2">Type 1</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {savedTests.map((test, index) => (
                                        <tr key={index} onClick={() => handleEditTestName(index)} className="cursor-pointer hover:bg-gray-300">
                                            <td className="border border-gray-400 py-0 px-4">{test.attributeName}</td>
                                            <td className="border border-gray-400 py-0 px-4">{test.fieldType}</td>
                                            <td className="border border-gray-400 py-0 px-4">{test.defaultValue}</td>
                                            <td className="border border-gray-400 py-0 px-4">{test.unit}</td>
                                            <td className="border border-gray-400 py-0 px-4">{test.priority}</td>
                                            <td className="border border-gray-400 py-0 px-4">{test.maleRangeStart}</td>
                                            <td className="border border-gray-400 py-0 px-4">{test.maleRangeEnd}</td>
                                            <td className="border border-gray-400 py-0 px-4">{test.femaleRangeStart}</td>
                                            <td className="border border-gray-400 py-0 px-4">{test.femaleRangeEnd}</td>
                                            <td className="border border-gray-400 py-0 px-4">{test.maleRange}</td>
                                            <td className="border border-gray-400 py-0 px-4">{test.femaleRange}</td>
                                            <td className="border border-gray-400 py-0 px-4">{test.text}</td>
                                            <td className="border border-gray-400 py-0 px-4">{test.type1}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {isModalOpen && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
                                    <div className="bg-gray-100 p-4 rounded-lg w-120" onClick={(e) => e.stopPropagation()}>
                                        <h3 className="text-lg font-semibold mt-5 text-red-500 text-center">Update Test Details</h3>
                                        <div className="mt-5 grid grid-cols-3 gap-4">
                                            <div>
                                                <label className="ml-2 text-blue-900">Attribute</label>
                                                <input
                                                    type="text"
                                                    name="attributeName"
                                                    value={editEntry.attributeName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                    placeholder="Enter attribute name"
                                                />
                                            </div>
                                            <div>
                                                <label className="ml-2 text-blue-900"> Field Type:</label>
                                                <input
                                                    type="text"
                                                    name="fieldType"
                                                    value={editEntry.fieldType}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                    placeholder="Enter field type"
                                                />
                                            </div>
                                            <div>
                                                <label className="ml-2 text-blue-900">Default</label>
                                                <input
                                                    type="number"
                                                    name="defaultValue"
                                                    value={editEntry.defaultValue}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                    placeholder="Enter default value"
                                                />
                                            </div>
                                            <div>
                                                <label className="ml-2 text-blue-950">Unit</label>
                                                <input
                                                    type="number"
                                                    name="unit"
                                                    value={editEntry.unit}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                    placeholder="Enter unit"
                                                />
                                            </div>
                                            <div>
                                                <label className="ml-2 text-blue-900">Priority</label>
                                                <input
                                                    type="number"
                                                    name="priority"
                                                    value={editEntry.priority}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                    placeholder="Enter priority"
                                                />
                                            </div>
                                            <div>
                                                <label className="ml-2 text-blue-900">Male Start</label>
                                                <input
                                                    type="number"
                                                    name="maleRangeStart"
                                                    value={editEntry.maleRangeStart}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                    placeholder="Enter Male Start Range"
                                                />
                                            </div>
                                            <div>
                                                <label className="ml-2 text-blue-900">Male End</label>
                                                <input
                                                    type="number"
                                                    name="maleRangeEnd"
                                                    value={editEntry.maleRangeEnd}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                    placeholder="Enter Male End Range"
                                                />
                                            </div>
                                            <div>
                                                <label className="ml-2 text-blue-900">Female Range</label>
                                                <input
                                                    type="number"
                                                    name="femaleRangeStart"
                                                    value={editEntry.femaleRangeStart}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                    placeholder="Enter Female Start Range"
                                                />
                                            </div>
                                            <div>
                                                <label className="ml-2 text-blue-900">Female End</label>
                                                <input
                                                    type="number"
                                                    name="femaleRangeEnd"
                                                    value={editEntry.femaleRangeEnd}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                    placeholder="Enter Female End Range"
                                                />
                                            </div>
                                            <div>
                                                <label className="ml-2 text-blue-900">Male Range</label>
                                                <input
                                                    type="number"
                                                    name="maleRange"
                                                    value={editEntry.maleRange}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                    placeholder="Enter Male Range"
                                                />
                                            </div>
                                            <div>
                                                <label className="ml-2 text-blue-900">Female Range</label>
                                                <input
                                                    type="number"
                                                    name="femaleRange"
                                                    value={editEntry.femaleRange}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                    placeholder="Enter Female Range"
                                                />
                                            </div>
                                            <div>
                                                <label className="ml-2 text-blue-900">Text</label>
                                                <input
                                                    type="text"
                                                    name="text"
                                                    value={editEntry.text}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                    placeholder="Enter Text"
                                                />
                                            </div>
                                            <div>
                                                <label className="ml-2 text-blue-900">Type 1</label>
                                                <input
                                                    type="number"
                                                    name="type1"
                                                    value={editEntry.type1}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                    placeholder="Enter Type 1"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex justify-end mt-4">
                                            <button
                                                className="px-4 py-2 bg-red-500 text-white rounded-lg  hover:bg-red-600"
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
    );
}

export default TestAttribute;

import { useState, } from 'react'
import AdminNavBar from './AdminNavbar'
function Admin() {
    const [activeTab, setActiveTab] = useState('New Test');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [isIdVisible, setIsIdVisible] = useState(false);
    const [newTestName, setNewTestName] = useState('');
    const [reportingName, setReportingName] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [gender, setGender] = useState('');
    const [sampleType, setSampleType] = useState('');
    const [performedBy, setPerformedBy] = useState('');
    const [suggestions, setSuggestions] = useState('yes');
    const [specialReport, setSpecialReport] = useState('');
    const [hours, setHours] = useState('');
    const [mins, setMins] = useState('');
    const handleOriginalPriceChange = (e) => setOriginalPrice(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);
    const handleSampleTypeChange = (e) => setSampleType(e.target.value);
    const handleSuggestionsChange = (e) => setSuggestions(e.taret.value);
    const handleSpecialReport = (e) => setSpecialReport(e.target.value);
    const handleHourChange = (e) => setHours(e.target.value);
    const handleMinChange = (e) => setMins(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            newTestName,
            reportingName,
            originalPrice,
            gender,
            sampleType,
            performedBy,
            suggestions,
            specialReport,
            hours,
            mins
        };
        setTableData([...tableData, newEntry]);
        setIsTableVisible(true);
    };
    const [isReportingNameChanged, setIsReportingNameChanged] = useState('')
    const handleNewTestNameChange = (e) => {
        const value = e.target.value;
        setNewTestName(value);
        if (!isReportingNameChanged) {
            setReportingName(value);
        }
    };

    const handleReportingNameChange = (e) => {
        setReportingName(e.target.value);
        setIsReportingNameChanged(true);
    };
    const [formData, setFormData] = useState({
        labName: '',
        charges: '',
        extraHours: '',
        extraMins: '',
    })
    const [tableData, setTableData] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleAddClick = () => {
        setTableData([...tableData, formData]);
        setFormData({ labName: '', charges: '', extraHours: '', extraMins: '' })
    }
    const handleTableVisible = () => {
        setIsTableVisible(true);
    }
    const handleIdVisible = () => {
        setIsIdVisible(true);
    }

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
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

    const handleUpdateTestName = () => {
        const updatedTableData = [...tableData];
        updatedTableData[editIndex] = editEntry;
        setTableData(updatedTableData);
        setIsModalOpen(false);
    };

  
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        const newCId = comments.length + 1;
        setComments([...comments, { comment: newComment, default: 0, cId: newCId }]);
        setNewComment(''); // Clear the input after saving
    };const [editIndex, setEditIndex] = useState(null);
    const [editEntry, setEditEntry] = useState({
        newTestName: '',
        originalPrice: '',
        gender: '',
        sampleType: '',
        hours: '',
        mins: '',
        performedBy: '',
        specialReport: '',
        suggestions: '',
        reportingName: '',
    });

    return (
        <div>
            <div className="relative flex items-start mt-10 bg-gradient-to-r from-blue-900 to-blue-900 p-5 rounded-lg">
                <div className="absolute -top-10 left-10">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/9058/9058693.png"
                        alt="Admin"
                        className="w-24 h-24 object-cover "
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-4 ">
                            <div>
                                <label className="block text-blue-950 ml-2">New Test Name</label>
                                <input
                                    type="text"
                                    value={newTestName}
                                    onChange={handleNewTestNameChange}
                                    className="w-full mt-3  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                    placeholder="New Test Name"
                                />
                            </div>
                            <div>
                                <label className="block text-blue-950 ml-2">Reporting Name:</label>
                                <input
                                    type="text"
                                    value={reportingName}
                                    onChange={handleReportingNameChange}
                                    className="w-full mt-3  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                    placeholder="Reporting Name"
                                />
                            </div>
                            <div>
                                <label className="block text-blue-950 ml-2">Original Price:</label>
                                <input
                                    type="number"
                                    value={originalPrice}
                                    onChange={handleOriginalPriceChange}
                                    className="w-full mt-3   text-end px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                    placeholder="Original Price"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-4">
                            <div>
                                <label className="block text-blue-950 ml-2"> Specific Gender:</label>
                                <select
                                    value={gender}
                                    onChange={handleGenderChange}
                                    className="w-full mt-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                >
                                    <option value="">Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="ForAll"> For All</option>
                                </select>
                            </div>
                            <div className="flex-1">
                                <label className="block text-blue-950 ml-2 ">Sample Type:</label>
                                <select
                                    value={sampleType}
                                    onChange={handleSampleTypeChange}
                                    className="w-full px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                >
                                    <option value="">Sample Type</option>
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
                                <label className="block text-blue-950 ml-2 mt-0">Report Time</label>
                                <div className="flex flex-row items-center">
                                    <div className="flex items-center mt-2">
                                        <label className="text-blue-950 mr-2 ml-2 ">Hours</label>
                                        <input
                                            type="number"
                                            placeholder="0"
                                            value={hours}
                                            onChange={handleHourChange}
                                            className="w-20  text-end px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                        />
                                    </div>
                                    <div className="flex items-center ml-3 mt-3">
                                        <label className="text-blue-950 mr-2">Mins</label>
                                        <input
                                            type="number"
                                            placeholder="0"
                                            value={mins}
                                            onChange={handleMinChange}
                                            className="w-20 px-4 text-end py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row mt-5">
                            <div className="ml-2">
                                <label className="text-blue-950">Performed By</label>
                            </div>
                            <div className="ml-10">
                                <input type="radio" className="ml-2" checked={performedBy === 'Other Lab'} onChange={() => setPerformedBy('Other Lab')} />
                                <label className="text-blue-950 ml-2">Other Lab</label>
                            </div>
                            <div className="ml-10">
                                <input type="radio" className="ml-2" checked={performedBy === 'Self'} onChange={() => setPerformedBy('Self')} ></input>
                                <label className="text-blue-950 ml-2">Self</label>

                            </div>
                        </div>
                        {performedBy === 'Other Lab' && (
                            <div className="mt-10  rounded-lg bg-slate-200 p-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-4  ">
                                <div className="flex flex-row">
                                    <div className="flex flex-col">
                                        <label className="text-blue-900 ml-2">Lab Name:</label>
                                        <select
                                            name="labName"
                                            value={formData.labName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                        >
                                            <option value="">Lab Name</option>
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
                                    <div className="ml-10 flex flex-col">
                                        <label className="text-blue-900 ml-2">Charges:</label>
                                        <input
                                            type="number"
                                            name="charges"
                                            value={formData.charges}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="flex flex-col">
                                        <label className="text-blue-900 ml-1">Extra Hours</label>
                                        <input
                                            type="number"
                                            name="extraHours"
                                            value={formData.extraHours}
                                            onChange={handleInputChange}
                                            placeholder="0"
                                            className="w-1/2 px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-5">
                                        <label className="text-blue-950 ml-1">Extra Mins</label>
                                        <input
                                            type="number"
                                            name="extraMins"
                                            value={formData.extraMins}
                                            onChange={handleInputChange}
                                            placeholder="0"
                                            className="w-1/2 px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                        />
                                    </div>
                                    <button
                                        className="mr-5 mt-4 bg-blue-900 text-white rounded-lg hover:bg-blue-700 w-20"
                                        onClick={handleAddClick}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="mt-4 ml-40 p-4 bg-white shadow-md rounded-lg w-full">
                                    <table className="table-auto w-full">
                                        <thead>
                                            <tr className="bg-blue-900 text-white">
                                                <th className="px-4 py-2">LabName</th>
                                                <th className="px-4 py-2">Charges</th>
                                                <th className="px-4 py-2">ExtraHours</th>
                                                <th className="px-4 py-2">ExtraMins</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData.map((entry, index) => (
                                                <tr key={index} className="hover:bg-gray-100">
                                                    <td className="border px-4 py-2">{entry.labName}</td>
                                                    <td className="border px-4 py-2">{entry.charges}</td>
                                                    <td className="border px-4 py-2">{entry.extraHours}</td>
                                                    <td className="border px-4 py-2">{entry.extraMins}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-0">
                            <div className="mt-5">
                                <label className="block text-blue-950 ml-2">Special Report:</label>
                                <input
                                    type="text"
                                    value={specialReport}
                                    onChange={handleSpecialReport}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                    placeholder="Special Report"
                                />
                            </div>
                            <div className="mt-5 ml-2 ">
                                <input type="radio" className="mt-10 ml-10" value={suggestions} onChange={handleSuggestionsChange}></input>
                                <label className="ml-5">Suggestion Status</label>
                            </div>
                        </div>
                        <div className="flex flex-row ml-10">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-blue-900 text-white rounded-lg mt-10 mb-5">
                                Save Test
                            </button>
                            <button onClick={openModal}
                                className="px-4 py-2 bg-blue-900 text-white rounded-lg mt-10 ml-10 mb-5">
                                Add Report Comment Template
                            </button>

                            {isModalOpen && (
                                <div
                                    className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60'
                                    onClick={closeModal} // Close modal on background click
                                >
                                    <div
                                        className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2"
                                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                                    >
                                        <h3 className="text-lg font-semibold text-blue-900 mb-4">Report Comment Template</h3>
                                        <div className="mt-3">
                                            <label className="ml-2 text-blue-900">Test Name</label>
                                            <select
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-950"
                                            >
                                                <option value="">Lab Name</option>
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
                                        <div className="mt-5 flex flex-col">
                                            <label className="text-blue-900 ml-2">Comment</label>
                                            <textarea
                                                className="w-full py-3 border border-gray-300 rounded-lg p-1 resize-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter your comment here..."
                                                value={newComment}
                                                onChange={(e) => setNewComment(e.target.value)}
                                            ></textarea>
                                        </div>
                                        <button
                                            onClick={handleAddComment}
                                            className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-red-600 transition duration-200">
                                            Save
                                        </button>

                                        <div className="overflow-hidden rounded-lg ">
                                            <table className="table-auto w-full mt-10 border-collapse">
                                                <thead>
                                                    <tr className="bg-blue-900">
                                                        <th className="px-4 py-2 text-white border-b">Comment</th>
                                                        <th className="px-4 py-2 text-white border-b">Default</th>
                                                        <th className="px-4 py-2 text-white border-b">cId</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {comments.map((comment, index) => (
                                                        <tr key={index} className="hover:bg-gray-100">
                                                            <td className="border px-4 py-2">{comment.comment}</td>
                                                            <td className="border px-4 py-2">{comment.default}</td>
                                                            <td className="border px-4 py-2">{comment.cId}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        <button onClick={closeModal} className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200">
                                            Update
                                        </button>
                                    </div>
                                </div>
                            )}


                        </div>

                    </div>
                )}

                {/* Update test portion */}
                {activeTab === 'Update Test' && (
                    <div className="bg-slate-200 p-4 rounded-lg">
                        <div>
                            <button className="px-4 py-2 bg-blue-900 text-white rounded-lg mt-0 ml-10" onClick={handleTableVisible}>Update Test Name</button>
                            <button className="px-4 py-2 bg-blue-900 text-white rounded-lg mt-0 ml-10" onClick={handleIdVisible}>Update Lab ids</button>
                            {/* Table & ID Visible Functionality */}
                            {isTableVisible && (
                               
                               <div className="mt-4 ml-0 p-4 bg-white shadow-md rounded-lg">
                               <table className="table-auto w-full border-collapse">
                                   <thead>
                                       <tr className="bg-blue-900 text-white">
                                           <th className="px-4 py-3">Test Name</th>
                                           <th className="px-4 py-3">Original Price</th>
                                           <th className="px-4 py-3">Gender</th>
                                           <th className="px-4 py-3">Sample Type</th>
                                           <th className="px-4 py-3">Hours</th>
                                           <th className="px-4 py-3">Mins</th>
                                           <th className="px-4 py-3">Performed By</th>
                                           <th className="px-4 py-3">Special Report</th>
                                           <th className="px-4 py-3">Suggestions</th>
                                           <th className="px-4 py-3">Reporting Name</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       {tableData.map((entry, index) => (
                                           <tr key={index} onClick={() => handleEditTestName(index)} className="cursor-pointer hover:bg-gray-300">
                                               <td className="border border-gray-400 px-4 py-2">{entry.newTestName}</td>
                                               <td className="border border-gray-400 px-4 py-2">{entry.originalPrice}</td>
                                               <td className="border border-gray-400 px-4 py-2">{entry.gender}</td>
                                               <td className="border border-gray-400 px-4 py-2">{entry.sampleType}</td>
                                               <td className="border border-gray-400 px-4 py-2">{entry.hours}</td>
                                               <td className="border border-gray-400 px-4 py-2">{entry.mins}</td>
                                               <td className="border border-gray-400 px-4 py-2">{entry.performedBy}</td>
                                               <td className="border border-gray-400 px-4 py-2">{entry.specialReport}</td>
                                               <td className="border border-gray-400 px-4 py-2">{entry.suggestions}</td>
                                               <td className="border border-gray-400 px-4 py-2">{entry.reportingName}</td>
                                           </tr>
                                       ))}
                                   </tbody>
                               </table>
                   
                               {isModalOpen && (
                                
                                   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
                                       <div className="bg-gray-100 p-4 rounded-lg w-120" onClick={(e)=>e.stopPropagation()}>
                                           <h3 className="text-lg font-semibold mt-5 text-blue-900 text-center">Update Test Details</h3>
                                           <div className="mt-5 grid grid-cols-2 gap-4">
                                               <div>
                                                   <label className="ml-2 text-blue-900">New Test Name</label>
                                                   <input
                                                       type="text"
                                                       name="newTestName"
                                                       value={editEntry.newTestName}
                                                       onChange={handleChange}
                                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                       placeholder="Enter new test name"
                                                   />
                                               </div>
                                               <div>
                                                   <label className="ml-2 text-blue-900">Original Price</label>
                                                   <input
                                                       type="text"
                                                       name="originalPrice"
                                                       value={editEntry.originalPrice}
                                                       onChange={handleChange}
                                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                       placeholder="Enter original price"
                                                   />
                                               </div>
                                               <div>
                                                   <label className="ml-2 text-blue-900">Gender</label>
                                                   <input
                                                       type="text"
                                                       name="gender"
                                                       value={editEntry.gender}
                                                       onChange={handleChange}
                                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                       placeholder="Enter gender"
                                                   />
                                               </div>
                                               <div>
                                                   <label className="ml-2 text-blue-950">Sample Type</label>
                                                   <input
                                                       type="text"
                                                       name="sampleType"
                                                       value={editEntry.sampleType}
                                                       onChange={handleChange}
                                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                       placeholder="Enter sample type"
                                                   />
                                               </div>
                                               <div>
                                                   <label className="ml-2 text-blue-900">Hours</label>
                                                   <input
                                                       type="text"
                                                       name="hours"
                                                       value={editEntry.hours}
                                                       onChange={handleChange}
                                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                       placeholder="Enter hours"
                                                   />
                                               </div>
                                               <div>
                                                   <label className="ml-2 text-blue-900">Mins</label>
                                                   <input
                                                       type="text"
                                                       name="mins"
                                                       value={editEntry.mins}
                                                       onChange={handleChange}
                                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                       placeholder="Enter mins"
                                                   />
                                               </div>
                                               <div>
                                                   <label className="ml-2 text-blue-900">Performed By</label>
                                                   <input
                                                       type="text"
                                                       name="performedBy"
                                                       value={editEntry.performedBy}
                                                       onChange={handleChange}
                                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                       placeholder="Enter performed by"
                                                   />
                                               </div>
                                               <div>
                                                   <label className="ml-2 text-blue-900">Special Report</label>
                                                   <input
                                                       type="text"
                                                       name="specialReport"
                                                       value={editEntry.specialReport}
                                                       onChange={handleChange}
                                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                       placeholder="Enter special report"
                                                   />
                                               </div>
                                               <div>
                                                   <label className="ml-2 text-blue-900">Suggestions</label>
                                                   <input
                                                       type="text"
                                                       name="suggestions"
                                                       value={editEntry.suggestions}
                                                       onChange={handleChange}
                                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                       placeholder="Enter suggestions"
                                                   />
                                               </div>
                                               <div>
                                                   <label className="ml-2 text-blue-900">Reporting Name</label>
                                                   <input
                                                       type="text"
                                                       name="reportingName"
                                                       value={editEntry.reportingName}
                                                       onChange={handleChange}
                                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                                       placeholder="Enter reporting name"
                                                   />
                                               </div>
                                           </div>
                                           <div className="flex justify-end mt-4">
                                               <button
                                                   className="px-4 py-2 bg-blue-950 text-white rounded-lg  hover:bg-red-500"
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
                            )}
                           
                            {isIdVisible && (
                                <input type="number" placeholder="0" className="w-1/4 ml-4 px-4 py-1 mt-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"></input>
                            )}
                        </div>
                        <div className="flex flex-row mt-10">
                            <div className="flex flex-col">
                                <label className="ml-2 text-blue-900">Lab Name</label>
                                <select

                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"
                                >
                                    <option value="">Select Lab Name</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="ForAll"> For All</option>
                                </select>
                            </div>
                            <div className="flex flex-col ml-4">
                                <label className="ml-2 text-blue-900">Charges</label>
                                <input type="number"

                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"></input>
                            </div>
                            <div className="flex flex-col ml-4">
                                <label className="ml-2 text-blue-900">Extra Hours</label>
                                <input type="number"

                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"></input>
                            </div>
                            <div className="flex flex-col ml-4">
                                <label className="ml-2 text-blue-900">Extra Mins</label>
                                <input type="number"

                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-blue-950"></input>
                            </div>
                            <button className="ml-10 mt-4  bg-blue-900 text-white rounded-lg hover:bg-blue-700 w-10" >
                                +
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Admin
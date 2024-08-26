// src/components/TestRecord.jsx
import  { useState } from 'react';

function TestRecord() {
  const [tests, setTests] = useState([]);
  const [testName, setTestName] = useState('');
  const [testPrice, setTestPrice] = useState('');
  const [showPictureDropdown, setShowPictureDropdown] = useState(false);

  const addTest = () => {
    setTests([...tests, { name: testName, price: testPrice }]);
    setTestName('');
    setTestPrice('');
  };

  return (
    <div>
      <form className="space-y-4">
        <div>
          <label className="block">Lab ID:</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Test Name:</label>
          <select value={testName} onChange={(e) => setTestName(e.target.value)} className="border p-2 w-full">
            <option>Select Test</option>
            <option>Blood Test</option>
            <option>X-Ray</option>
          </select>
        </div>
        {testName && (
          <div>
            <label className="block">Picture:</label>
            <select onChange={() => setShowPictureDropdown(!showPictureDropdown)} className="border p-2 w-full">
              <option>Capture</option>
              <option>Browse</option>
            </select>
          </div>
        )}
        <div>
          <label className="block">Price:</label>
          <input type="text" value={testPrice} onChange={(e) => setTestPrice(e.target.value)} className="border p-2 w-full" />
        </div>
        <button type="button" onClick={addTest} className="bg-blue-500 text-white px-4">Add Test</button>
      </form>
      <table className="min-w-full mt-4 border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Test Name</th>
            <th className="border px-4 py-2">Original Price</th>
            <th className="border px-4 py-2">Discount</th>
            <th className="border px-4 py-2">Total</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{test.name}</td>
              <td className="border px-4 py-2">{test.price}</td>
              <td className="border px-4 py-2">0</td>
              <td className="border px-4 py-2">{test.price}</td>
              <td className="border px-4 py-2">
                <button onClick={() => setTests(tests.filter((_, i) => i !== index))} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TestRecord;

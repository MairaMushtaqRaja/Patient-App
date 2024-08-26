import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Menu button for smaller screens */}
      <div className="fixed left-0 top-16 p-4 bg-navy text-white md:hidden">
        <button onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>

     
      <div
        className={`fixed left-0 top-0 h-full w-60 bg-blue-900 text-white transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:block`}
      >
    
        <div className="flex justify-end p-4 md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <FaTimes />
          </button>
        </div>
        <div className="flex items-center mb-6 flex-col">
          <img src="/path/to/logo.png" alt="Lab Logo" className="w-16 h-16 rounded-full" />
          <h1 className="text-2xl font-bold ml-3">Admin Section</h1>
        </div>
        <ul className="space-y-4 mt-8 ml-1">
          <li><Link to="/admin" className="block py-2 px-4 rounded hover:bg-gray-700 text-start" onClick={toggleMenu}>Admin</Link></li>
          <li><Link to="/new-patient" className="block py-2 px-4 rounded hover:bg-gray-700 text-start" onClick={toggleMenu}>New Patient</Link></li>
          <li><Link to="/reprint" className="block py-2 px-4 rounded hover:bg-gray-700 text-start" onClick={toggleMenu}>Reprint</Link></li>
          <li><Link to="/balance-payment" className="block py-2 px-4 rounded hover:bg-gray-700 text-start" onClick={toggleMenu}>Balance Payment</Link></li>
          <li><Link to="/update-tests" className="block py-2 px-4 rounded hover:bg-gray-700 text-start" onClick={toggleMenu}>Update Tests</Link></li>
          <li><Link to="/update-patient-detail" className="block py-2 px-4 rounded hover:bg-gray-700 text-start" onClick={toggleMenu}>Update Patient Detail</Link></li>
          <li><Link to="/outside-lab-tests" className="block py-2 px-4 rounded hover:bg-gray-700 text-start" onClick={toggleMenu}>Outside Lab Tests</Link></li>
          <li><Link to="/expenses" className="block py-2 px-4 rounded hover:bg-gray-700 text-start" onClick={toggleMenu}>Expenses</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

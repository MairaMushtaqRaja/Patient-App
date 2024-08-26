import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaUser, FaFileAlt, FaMoneyBillWave, FaChartLine, FaPen, FaExternalLinkAlt } from 'react-icons/fa';

function AdminNavBar() {
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
        className={`fixed left-0 top-0 h-full w-60 bg-blue-900 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:block`}
      >

        <div className="flex justify-end p-4 md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <FaTimes />
          </button>
        </div>
        <div className="flex items-center mb-6 flex-col">
          <img src="https://tse1.mm.bing.net/th?id=OIP.EUPxiTZSPxLUDzofWKNkRAHaF7&pid=Api&P=0&h=220" alt="Lab Logo" className="w-16 h-16 rounded-full mt-16 mr-4" />
          <h1 className="text-2xl font-bold mr-3 mt-4">Admin Pannel</h1>
          <div className="w-full border-b border-white mt-4"></div>
        </div>
       
        <ul className="space-y-4 mt-10 ml-1 ">
          <li className="flex flex-row items-center rounded hover:bg-blue-700 mr-2 px-4 ">
            <FaUser className="ml-5" />
            <Link to="/admin" className="block py-2 px-4  text-start" onClick={toggleMenu}>Main Test Name</Link>
          </li>
          <li className="flex flex-row items-center rounded hover:bg-blue-700 mr-2 px-4 ">
            <FaFileAlt className="ml-5" />
            <Link to="/testattribute" className="block py-2 px-4  text-start" onClick={toggleMenu}>Test Attribute</Link>
          </li>
          <li className="flex flex-row items-center py-0 px-4 rounded hover:bg-blue-700 mr-2">
            <FaMoneyBillWave className="ml-5" />
            <Link to="/account" className="block py-2 px-4  text-start" onClick={toggleMenu}>New Accounts</Link>
          </li>
          <li className="flex flex-row items-center py-0 px-4 rounded hover:bg-blue-700 mr-2">
            <FaChartLine className="ml-5" />
            <Link to="/report" className="block py-2 px-4  text-start" onClick={toggleMenu}>Reports</Link>
          </li>
          <li className="flex flex-row items-center py-0 px-4 rounded hover:bg-blue-700 mr-2">
            <FaPen className="ml-5" />
            <Link to="/style" className="block py-2 px-4  text-start" onClick={toggleMenu}>Styles</Link>
          </li>
          <li className="flex flex-row items-center py-0 px-4 rounded hover:bg-blue-700 mr-2">
            <FaExternalLinkAlt className="ml-5" />
            <Link to="/limitations" className="block py-2 px-4 rounded  text-start" onClick={toggleMenu}>Limitations</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNavBar;

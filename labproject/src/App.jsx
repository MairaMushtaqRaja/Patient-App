import './App.css';

import Patient from './Components/Patient';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProgressIndicator from './Components/ProgressIndicator';
import Admin from './Components/Admin';
import TestAttribute from './Components/TestAttribute';
import Limitations from './Components/Limitations';
import Report from './Components/Report';
import Style from './Components/Style';
import Accounts from './Components/Accounts';
import AdminNavBar from './Components/AdminNavbar';


function App() {
  return (
    <Router>
      <div className="h-full bg-slate-200 ">
        <AdminNavBar></AdminNavBar>
        <div className="ml-64 mt-0 p-8">
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/new-patient" element={<Patient />} />
            <Route path="/reprint" element={<div>Reprint Screen</div>} />
            <Route path="/balance-payment" element={<div>Balance Payment Screen</div>} />
            <Route path="/update-tests" element={<div>Update Tests Screen</div>} />
            <Route path="/update-patient-detail" element={<div>Update Patient Detail Screen</div>} />
            <Route path="/outside-lab-tests" element={<div>Outside Lab Tests Screen</div>} />
            <Route path="/expenses" element={<div>Expenses Screen</div>} />
            <Route path="/indicator" element={<ProgressIndicator />} />
            <Route path="/testattribute" element={<TestAttribute />} />
            <Route path="/limitations" element={<Limitations />} />
            <Route path="/report" element={<Report />} />
            <Route path="/style" element={<Style />} />
            <Route path="/account" element={<Accounts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

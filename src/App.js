import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import ViewStatement from "./pages/ViewStatement/ViewStatement";
import LoanApplication from "./pages/LoanApplication/LoanApplication";

toast.configure();
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} /> 
          <Route path="/view-statement" element={<ViewStatement />} /> 
          <Route path="/loan-application" element={<LoanApplication />} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;

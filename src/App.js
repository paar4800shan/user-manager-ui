import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import ViewStatement from "./pages/ViewStatement/ViewStatement";
import TransactionManagement from "./pages/TransactionManagement/TransactionManagement";
import UserOperations from "./pages/UserOperations/UserOperations";
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
          <Route path="/statement" element={<ViewStatement />} />
          <Route path="/transaction" element={<TransactionManagement />} />
          <Route path="/operations" element={<UserOperations />} />
          <Route path="/loan" element={<LoanApplication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

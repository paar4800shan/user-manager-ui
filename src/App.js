import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import ViewStatement from "./pages/ViewStatement/ViewStatement";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/view-statement" element={<ViewStatement />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

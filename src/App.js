import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

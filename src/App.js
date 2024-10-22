import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import AdminDash from "./components/AdminDash";
import Login from "./components/Login";
import Register from "./components/Register";
import BusinessPage from "./components/BusinessPage";
import Thank from "./components/Thank";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="admin" element={<AdminDash />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="business_info" element={<BusinessPage />}></Route>
        <Route path="submitted" element={<Thank />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

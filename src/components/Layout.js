import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <header>Home</header>
    <nav>
        <Link to="/login">Login Here</Link>
        <br></br>
        <Link to="/register">Register a new account</Link>
        <br></br>
        <Link to="/business_info">Partner With Us</Link>
        <br></br>
        <Link to="/admin">Admin Dashboard</Link>
    </nav>

    <Outlet />
    </div>
  )
}

export default Layout
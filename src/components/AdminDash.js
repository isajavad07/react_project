import { useState } from "react"
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"

const AdminDash = () => {
  return (
    <>
        <div className="container">
            <header>Administrator</header>
            <Link to="/"><FaHome />Back to Home Page</Link>
            <br />
        </div>
    </>
  )
}

export default AdminDash
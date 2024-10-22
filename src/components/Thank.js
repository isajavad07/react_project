import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"

const Thank = () => {
  return (
    <div className="container">
        <header>Thank you for your submission</header>
        <p>You will receive an email in response between 3-5 business days.</p>
        <Link to="/"><FaHome />Back to Home Page</Link>
    </div>
  )
}

export default Thank
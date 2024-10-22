import { React, useState } from "react"
import { Outlet, Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
  
    const onSubmit = (e) => {
      e.preventDefault()
  
      if(!email || !password || !phone) {
        alert('Please ensure every field is complete!');
      }
      else {
        alert('Registered successfully')
        next_page()
        return
      }
  
      setEmail('')
      setPassword('')
      setPhone('')
      
    }

    const navigate = useNavigate()

    const next_page = () => {
        navigate('/login');
    }

  return (
    <>
        <div className="container">
        <header>Registration Page</header>
        <p>*All fields required unless noted</p>

            <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>*Email:</label>
                <input type="text" value={email}
                onChange={(e) =>
                    setEmail(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>*Password:</label>
                <input type="password" value={password}
                onChange={(e) =>
                    setPassword(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>*Password Again:</label>
                <input type="password" value={password}
                onChange={(e) =>
                    setPassword(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>*Phone number:</label>
                <input type="text" value={phone}
                onChange={(e) =>
                    setPhone(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>What's your gender? (optional)</label>
            </div>
            <div>
                <input type="radio" name="gender" id="female"></input>
                <label htmlFor="female">Female</label>

                <input type="radio" name="gender" id="male"></input>
                <label htmlFor="male">Male</label>

                <input type="radio" name="gender" id="non-binary"></input>
                <label htmlFor="non-binary">Non-Binary</label>
            </div>
            <div className="form-control">
                <label>Whats your date of birth</label>
                <input type="date" id="dob"></input>
            </div>
            <input type="submit" value='Register Account'></input>
            </form>
            <Link to="/"><FaHome />Back to Home Page</Link>
        </div>
        <Outlet />
    </>
  )
}

export default Register
import { React, useState } from 'react'
import { Outlet, Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()

    if(!email || !password || !phone) {
      alert('Please ensure every field is complete!');
    }
    else {
      alert('Logged in successfully')
      next_page()
      return
    }

    setEmail('')
    setPassword('')
    setPhone('')
    
  }

  const navigate = useNavigate()

  const next_page = () => {
    navigate('/business_info');
  }

  return (
    <>
      <div className="container">
        <header>Login Page</header>
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
            <label>*Phone number:</label>
            <input type="text" value={phone}
              onChange={(e) =>
                setPhone(e.target.value)}></input>
          </div>
          <input type="submit" value='Next'></input>
        </form>
        <Link to="/"><FaHome />Back to Home Page</Link>
      </div>

      <Outlet />
    </>
  )
}

export default Login
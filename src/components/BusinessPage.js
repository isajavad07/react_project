import { useNavigate } from "react-router-dom"
import { Outlet, Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import { MdFileUpload } from "react-icons/md"

const BusinessPage = () => {
  const navigate = useNavigate()

  const next_page = () => {
      navigate('/submitted');
  }

  return (
    <>
      <div className="container">
        <header>Business Details</header>
        <p>*All fields required unless noted</p>

        <form className="add-form" onSubmit={next_page}>
          <div className="form-control">
            <label>*What type of business do you propose?</label>
            <input type="text" required></input>
          </div>
          <div className="form-control">
            <label>*Is your business registered?(Yes/No)</label>
            <input type="text" maxLength="3" required></input>
          </div>
          <div className="form-control">
            <label>*Business Name</label>
            <input type="text" required></input>
          </div>
          <div className="form-control">
            <label>*Business Registration Number</label>
            <input type="text" maxLength="8" required></input>
          </div>
          <div className="form-control">
            <label>*About Your Business</label>
            <input type="text" required></input>
          </div>
          <div className="form-control">
            <label>*What type of treatment(s) do you propose?</label>
            <input type="text" required></input>
          </div>
          <div className="form-control">
            <label>*Where are you based?</label>
            <input type="text" required></input>
          </div>
          <div className="form-control">
            <label>Business Address</label>
            <input type="text"></input>
          </div>
          <div className="form-control">
            <label>Postcode</label>
            <input type="text"></input>
          </div>
          <div className="form-control">
            <label>Upload your ID Card/ Proof of Address <MdFileUpload/> </label>
            <input type="file"></input>
          </div>
          <div className="form-control">
            <label>Upload any Beauty Certificate <MdFileUpload/> </label>
            <input type="file" multiple></input>
          </div>
          <div className="agreement">
            <input type="checkbox" required></input>
            <label>I have read and accepted the terms and conditions*</label>
            <br></br>
            <input type="checkbox" required></input>
            <label>I am over 18 years old*</label>
            <br></br>
            <input type="checkbox"></input>
            <label>I would like to receive emails on all the latest news 
              & updates from Business.
              (Note: business does not share or sell your personal 
              information to third parties).</label>
            <Link to="/login"> or Login to your account</Link>
          </div>
          <input type="submit" value='Become a partner with us'></input>
        </form>
        <Link to="/"><FaHome />Back to Home Page</Link>
      </div>

    <Outlet />
    </>
  )
}

export default BusinessPage
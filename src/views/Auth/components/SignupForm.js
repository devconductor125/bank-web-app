import { useState } from "react"
import Input from "../../../components/UI/Input/Input"
import { Link } from "react-router-dom"

const SignupForm = () => {

  const [form, setForm] = useState({})

  const updateForm = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value
    })
  }

  const onSubmit = () => {

  }

  return <div className="form-container">

    <div className="logo">
      Banking <span className="app-text">App</span>
    </div>

    <form className="form" onSubmit={onSubmit}>
      <div className="form-text">
        <h1 className="title">Sign Up</h1>
        <p className="description">To continue using the app, register by filling out the forms below.</p>
      </div>

      <div>
        <Input label="First Name" name="firstname" placeholder="First Name" type="text" onChange={(e) => updateForm(e, "firstname")} required/>
        <Input label="Last Name" name="lastname" placeholder="Last Name" type="text" onChange={(e) => updateForm(e, "lastname")} required/>
        <Input label="Email" name="email" placeholder="email@example.com" type="email" onChange={(e) => updateForm(e, "email")} required/>
        <Input label="Password" name="password" placeholder="" type="password" onChange={(e) => updateForm(e, "password")} required/>
      </div>

      <div className="terms-and-conditions form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required/>
        <label className="form-check-label" for="flexCheckDefault">
          Agree to Terms & Conditions and Privacy Policy.
        </label>
      </div>

      <div className="actions-container">
        <button className="signup-button">Sign Up</button>
        <Link to="/signin"><button className="signin-button">Sign In</button></Link>
      </div>
    </form>
  </div>
}

export default SignupForm
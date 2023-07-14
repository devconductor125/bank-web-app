import ImageContainer from "./components/ImageContainer";
import SignupForm from "./components/SignupForm";
import "./style.scss"

const Signup = (props) => {
  return <div className="signup-container">
    <SignupForm />
    <ImageContainer />
  </div>
}

export default Signup;
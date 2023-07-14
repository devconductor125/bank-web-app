import ImageContainer from "./components/ImageContainer";
import SigninForm from "./components/SigninForm";
import "./style.scss"

const Signin = (props) => {
  return <div className="signup-container">
    <SigninForm />
    <ImageContainer />
  </div>
}

export default Signin;
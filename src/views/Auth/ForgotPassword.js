import ImageContainer from "./components/ImageContainer";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import "./style.scss"

const ForgotPassword = (props) => {
  return <div className="signup-container">
    <ForgotPasswordForm />
    <ImageContainer />
  </div>
}

export default ForgotPassword;
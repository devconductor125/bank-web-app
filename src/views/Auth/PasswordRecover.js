import ImageContainer from "./components/ImageContainer";
import PasswordRecoverForm from "./components/PasswordRecoverForm";
import "./style.scss"

const PasswordRecover = (props) => {
  return <div className="signup-container">
    <PasswordRecoverForm />
    <ImageContainer />
  </div>
}

export default PasswordRecover;
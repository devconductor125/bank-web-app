import { useRef, useState } from "react"
import EyeIcon from "../../../assets/icons/eye.svg"
import EyeIconOff from "../../../assets/icons/eye-off.svg"
import "./style.scss"

const Input = (props) => {

  const [type, setType] = useState(props.type)
  const inputRef = useRef()

  const togglePasswordType = () => {
    setType(type==="password"?"text":"password")
  }

  const focusInput = () => {
    inputRef.current.focus()
  }

  return <div className="input-container">
    <label className="label" onClick={focusInput}> { props.label } </label>
    <div className="input">
      <input {...props} className={`${props.className} form-control`} type={type} ref={ inputRef } />
      {
        props.type==="password"? <img onClick={togglePasswordType} src={ type==="password"?EyeIcon:EyeIconOff } /> : ""
      }
    </div>
  </div>
}

export default Input;
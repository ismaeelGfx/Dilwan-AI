import { ButtonProps } from "../types/types"


const Button: React.FC<ButtonProps> = ( {handleClick , text , extraClasses}) => {
  return (
    <button onClick={handleClick} className={`btn ${extraClasses}`}>{text}</button>
  )
}

export default Button
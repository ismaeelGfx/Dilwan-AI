import { ContainerProps } from "../types/types"


const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="container">{children}</div>
  )
}

export default Container
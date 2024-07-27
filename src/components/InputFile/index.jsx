import { Container, InputContainer } from "./styles";

import { PiUploadSimple } from "react-icons/pi";

export function InputFile({title, placeholder, ...rest}){
  return(
    <Container>
      {title && <p>{title}</p>}
      <InputContainer>        
        <label htmlFor="fileInput">
          <PiUploadSimple />
          {placeholder}
        </label>
        <input id="fileInput" type="file" { ...rest }/> 
      </InputContainer>
    </Container>
  )
}
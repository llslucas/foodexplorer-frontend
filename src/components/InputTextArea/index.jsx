import { Container, InputContainer } from "./styles";

export function InputTextArea({title, ...rest}){
  return(
    <Container>
      {title && <p>{title}</p>}
      <InputContainer>
        <textarea {...rest} /> 
      </InputContainer>
    </Container>
  )
}
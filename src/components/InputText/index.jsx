import { Container, InputContainer } from "./styles";

export function InputText({title, icon: Icon, ...rest}){
  return(
    <Container>
      {title && <p>{title}</p>}
      <InputContainer>
        {Icon && <Icon />}
        <input {...rest} /> 
      </InputContainer>
    </Container>
  )
}
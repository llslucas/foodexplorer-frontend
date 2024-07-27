import { Container } from "./styles";

export function Button({icon: Icon, title, height, ...rest}){
  return(
    <Container $height={height} {...rest}>
      {Icon && <Icon size="1.5rem"/>}
      {title}
    </Container>
  )
}
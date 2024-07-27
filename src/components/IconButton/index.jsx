import { Container, Counter } from "./styles";

export function IconButton({icon: Icon, counter, ...rest}){
  return(
    <Container {...rest}>
      {Icon && <Icon />}
      {counter && <Counter> {counter} </Counter>}
    </Container>
  )
}
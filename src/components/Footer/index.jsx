import { Brand } from "../Brand";
import { Container } from "./styles";

export function Footer(){
  return(
    <Container>
      <Brand color={({theme}) => theme.COLORS.LIGHT_700} />
      <p>© 2024 - Todos os direitos reservados</p>
    </Container>
  )
}
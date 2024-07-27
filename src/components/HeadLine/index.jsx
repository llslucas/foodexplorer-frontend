import { Container, InfoContainer, ImgContainer, TextContainer, Background } from "./styles";
import macarons from "../../assets/Macarons.png"

export function HeadLine(){
  return(
    <Container>     
      <InfoContainer>
        <ImgContainer>
          <img src={macarons}/>      
        </ImgContainer>
        <TextContainer>
          <h2>Sabores inigualáveis</h2>  
          <h3>Sinta o cuidado do preparo com ingredientes selecionados.</h3>
        </TextContainer>      
      </InfoContainer>     
      <Background></Background>       
    </Container>
  )
}
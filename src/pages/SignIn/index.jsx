import { useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";

import { Brand } from "../../components/Brand";
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function SignIn(){
  const navigate = useNavigate();
  return (        
    <Container>
      <Brand />      
      <Form>
        <h1>Faça login</h1>
        <InputText title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />  
        <InputText title="Senha" placeholder="No mínimo 6 caracteres" />  
        <Button title="Entrar" height="3rem"/>
        <TextButton title="Criar uma conta" onClick={e => navigate("/register")} />
      </Form>
    </Container>
  )
}
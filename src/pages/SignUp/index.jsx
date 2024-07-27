import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";

import { Brand } from "../../components/Brand";
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";


export function SignUp(){
  const navigate = useNavigate();
  return (        
    <Container>
      <Brand />      
      <Form>
        <h1>Criar Conta</h1>
        <InputText title="Seu Nome" placeholder="Exemplo: Maria da Silva" />  
        <InputText title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />  
        <InputText title="Senha" placeholder="No mínimo 6 caracteres" />  
        <Button title="Criar conta" height="3rem"/>
        <TextButton title="Já tenho uma conta" onClick={e => navigate(-1)} />
      </Form>
    </Container>
  )
}
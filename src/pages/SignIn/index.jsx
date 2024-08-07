import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";

import { Brand } from "../../components/Brand";
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { useAuth } from "../../hooks/auth";

export function SignIn(){
  const { signIn } = useAuth();

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(){    
    await signIn({email, password}); 
  }

  return (        
    <Container>
      <Brand />      
      <Form>
        <h1>Faça login</h1>

        <InputText 
          title="Email" 
          placeholder="Exemplo: exemplo@exemplo.com.br" 
          onChange={e => setEmail(e.target.value)}
        />  

        <InputText 
          type="password"
          title="Senha" 
          placeholder="No mínimo 6 caracteres" 
          onChange={e => setPassword(e.target.value)}
        />  

        <Button 
          title="Entrar" 
          height="3rem"
          onClick={handleLogin}
        />

        <TextButton title="Criar uma conta" onClick={() => navigate("/register")} />
      </Form>
    </Container>
  )
}
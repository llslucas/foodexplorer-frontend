import { api } from "../../services/api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";

import { Brand } from "../../components/Brand";
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";


export function SignUp(){
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleUserCreation(){    
    if(name === ''){
      return alert("O campo Seu Nome não pode estar em branco.");
    }

    if(email === ''){
      return alert("O campo Email não pode estar em branco.");
    }

    if(password === ''){
      return alert("O campo Senha não pode estar em branco.");
    }

    try{
      const response = await api.post("/users", {name, email, password});      
      alert("Usuário criado com sucesso!");
    }catch(e){
      alert(e.response.data.message); 
    }
  }

  return (        
    <Container>
      <Brand />      
      <Form>
        <h1>Criar Conta</h1>

        <InputText 
          title="Seu Nome" 
          placeholder="Exemplo: Maria da Silva" 
          onChange={e => setName(e.target.value)}
        />  

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
          title="Criar conta" 
          height="3rem"
          onClick={handleUserCreation}
        />

        <TextButton title="Já tenho uma conta" onClick={() => navigate(-1)} />
      </Form>
    </Container>
  )
}
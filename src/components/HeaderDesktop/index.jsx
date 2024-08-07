import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";

import { Brand } from "../Brand";
import { InputText } from "../InputText";
import { Button } from "../Button";
import { IconButton } from "../IconButton";

import { PiReceipt, PiSignOut } from "react-icons/pi";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

//import user from "../../utils/user";

export function HeaderDesktop({onSearch, ...rest}){
  const { signOut, user } = useAuth();
  const navigate = useNavigate();    

  function handleButtonClick(){        
    if(user.isAdmin){
      navigate("/new");
    }
  }  

  function handleSignOut(){
    signOut();
  }

  return(
    <Container {...rest}>      
      <Brand />    
      <InputText type="text" icon={MdSearch} placeholder={"Busque por pratos ou ingredientes"} onChange={onSearch} />  
      <Button icon={!user.isAdmin && PiReceipt} title={user.isAdmin ? "Novo Prato" : `Pedidos (0)`} onClick={handleButtonClick} />
      <IconButton icon={PiSignOut} onClick={handleSignOut} />
    </Container>
  )
}
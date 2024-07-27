import { PiReceipt, PiX } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { IconButton } from "../IconButton";
import { Brand } from "../Brand";

import user from "../../utils/user";

export function HeaderMobile({isMenuActive, onMenuClick, ...rest}){ 

  if(!isMenuActive){
    return(    
      <Container $isMenuActive={isMenuActive} $userIsAdmin={user.isAdmin} {...rest}>   
        <IconButton icon={ FiMenu } onClick={onMenuClick} />
        <Brand />
        {!user.isAdmin && <IconButton icon={ PiReceipt } counter="99" />}
        {user.isAdmin && <span></span>}
      </Container>
    )
  }else{
    return(
      <Container $isMenuActive={isMenuActive} {...rest}> 
        <IconButton icon={ PiX } onClick={onMenuClick} />
        <p>Menu</p>        
      </Container>
    )
  }
  
}
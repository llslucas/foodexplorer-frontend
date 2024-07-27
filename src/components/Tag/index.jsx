import { IconButton } from "../IconButton";
import { Container } from "./styles";
import { PiX, PiPlus } from "react-icons/pi";

export function Tag({title, isNew, onClick, ...rest}){

  function onIconClick(e){    
    onClick(e, title);
  }

  return(
    <Container $isNew={isNew}>
      {isNew ? <input placeholder="Adicionar" {...rest} /> : <p>{title}</p>}
      <IconButton icon={isNew ? PiPlus : PiX} data-tag-title={title} onClick={onIconClick}  />
    </Container>
  )
}
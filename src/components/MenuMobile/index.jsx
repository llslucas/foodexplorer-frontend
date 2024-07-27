import { Container, Options, Option } from "./styles";
import { InputText } from "../InputText";

import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import user from "../../utils/user";

export function MenuMobile(){
  const navigate = useNavigate(); 
  
  return(
    <Container>
      <InputText icon={ MdSearch } />
      <Options>
        {user.isAdmin && <Option onClick={e => navigate("/new")}> Novo Prato </Option>}
        <Option>Sair</Option>
      </Options>
    </Container>  
  );
};
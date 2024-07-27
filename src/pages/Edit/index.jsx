import { Container, Content, InputContainer, ButtonContainer, Voltar } from "./styles";
import { HeaderMobile } from "../../components/HeaderMobile";
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { Footer } from "../../components/Footer";
import { MenuMobile } from "../../components/MenuMobile";
import { InputText } from "../../components/InputText";
import { InputFile } from "../../components/InputFile";
import { InputSelection } from "../../components/InputSelection";
import { InputTags } from "../../components/InputTags";
import { InputTextArea } from "../../components/InputTextArea";

import { MdArrowBackIos } from "react-icons/md";

import { useState } from "react";
import { Button } from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import foodList from "../../utils/foodList";

export function Edit(){   
  const navigate = useNavigate();
  const params = useParams();
  const food = foodList[params.id];

  const [isMenuActive, setMenuActive] = useState(false);
  
  function handleMenuClick(){
    setMenuActive(prevState => !prevState);
  }
  
  const [tags, setTags] = useState(food.ingredientes);
  const [newTag, setNewTag] = useState("");

  function handleTagAdd(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }
  
  function handleTagRemove(tag){
    setTags(prevState => prevState.filter(existingTag => existingTag !== tag));
  }

  function handleTagChange(e){
    setNewTag(e.target.value);
  }   

  const options = [
    { value: 'refeicao', label: 'Refeição' },
    { value: 'lanches', label: 'Lanches' },
    { value: 'sucos', label: 'Sucos' }
  ] 

  return(    
    <Container>
      <HeaderMobile data-mobile-only isMenuActive={isMenuActive} onMenuClick={handleMenuClick} />
      <HeaderDesktop data-desktop-only />
      {isMenuActive && <MenuMobile /> }
      {!isMenuActive && 
        <Content>     
          <Voltar onClick={e => navigate(-1)}>
            <MdArrowBackIos />
            voltar
          </Voltar>    
          
          <h1>Editar prato</h1>  

          <InputContainer>
            <InputFile title="Imagem do prato" placeholder="Selecione imagem"  />
            <InputText type="text" title="Nome" placeholder="Ex.: Salada Ceasar" defaultValue={food.name} />
            <InputSelection title="Categoria" placeholder="Selecione a categoria..." options={options} defaultValue={options.filter(option => option.label === food.group)} />
          </InputContainer>

          <InputContainer>
            <InputTags 
              title="Ingredientes" 
              tags={tags} 
              value={newTag}
              onAdd={handleTagAdd} 
              onRemove={handleTagRemove}
              onChange={handleTagChange}
            />
            <InputText type="number" title="Preço (R$)" placeholder="49,99" defaultValue={food.price} />
          </InputContainer>

          <InputTextArea title="Descrição" defaultValue={food.description} placeholder="Fale brevemente sobre o prato, seus ingredientes e composição." />
          
          <ButtonContainer>
            <Button title="Excluir Prato" />
            <Button title="Salvar Alterações" />
          </ButtonContainer>
          
        </Content> 
      }
      <Footer />
    </Container>
  )
}
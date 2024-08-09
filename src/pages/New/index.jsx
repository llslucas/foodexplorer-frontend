import { api } from "../../services/api";

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
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { Button } from "../../components/Button";

export function New(){   
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');  
  const [ingredientes, setIngredientes] = useState([]);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const [newIngrediente, setNewIngrediente] = useState('');  
  const [options, setOptions] = useState([]);   

  const [isMenuActive, setMenuActive] = useState(false);  
  function handleMenuClick(){
    setMenuActive(prevState => !prevState);
  } 
  
  function handleTagAdd(){   
    if(newIngrediente){
      setIngredientes([...ingredientes, newIngrediente]);
      setNewIngrediente("");
    }    
  }
  
  function handleTagRemove(tag){   
    setIngredientes(ingredientes.filter(existingTag => existingTag !== tag));        
  }

  function handleTagChange(e){
    setNewIngrediente(e.target.value);
  }   

  function handleNewOption(option){
    const newOption = {category: option}
    setOptions(prevState => [...prevState, newOption]);
    setCategory(option)
  }

  async function handleImageChange(e){
    const file = e.target.files[0];
    setImage(file);    
  }

  async function handleSavePrato(){   
    try{
      const prato = {      
        name,
        description,
        category,
        price,
        ingredientes,
      } 

      const response = await api.post(`/pratos`, prato);   
  
      if(image){
        const fileUploadForm = new FormData();
        fileUploadForm.append("image", image);      

        await api.patch(`/pratos/image/${response.data.id}`, fileUploadForm);
      }         

      alert("Prato criado com sucesso!");

      navigate("/");
    }catch(e){
      if(e.response){
        alert(e.response.data.message);
      }else{
        console.log(e);
        alert("Não foi possível cadastrar o prato.");
      }
    }
  }

  useEffect(() => {   
    async function fetchCategories(){
      try{
        const response = await api.get("/pratos/categories");
        //console.log(response.data);

        const categories = response.data;  

        setOptions(categories);
      }catch(e){
        console.log(e);
        navigate("/");
      }      
    };

    fetchCategories();
  }, []);

  return(    
    <Container>
      <HeaderMobile data-mobile-only isMenuActive={isMenuActive} onMenuClick={handleMenuClick} />
      <HeaderDesktop data-desktop-only />
      {isMenuActive && <MenuMobile /> }
      {!isMenuActive && 
        <Content>     
          <Voltar onClick={() => navigate(-1)}>
            <MdArrowBackIos />
            voltar
          </Voltar>    
          
          <h1>Novo prato</h1>  

          <InputContainer>
            <InputFile 
              title="Imagem do prato" 
              placeholder={image ? image.name : "Selecione imagem"}
              onChange={handleImageChange}
            />

            <InputText 
              type="text" 
              title="Nome" 
              placeholder="Ex.: Salada Ceasar" 
              value={name} 
              onChange={e => setName(e.target.value)}
            />

            <InputSelection 
              title="Categoria" 
              placeholder="Selecione a categoria..." 
              options={ options }         
              value={category === '' ? null : {category}}      
              getOptionLabel={ option => option.category || option.label }
              getOptionValue={ option => option.category || option.value }
              onChange={value => setCategory(value ? value.category : '')}              
              onCreateOption={handleNewOption}                       
            />
          </InputContainer>

          <InputContainer>
            <InputTags 
              title="Ingredientes" 
              tags={ingredientes} 
              value={newIngrediente}
              onAdd={handleTagAdd} 
              onRemove={handleTagRemove}
              onChange={handleTagChange}
            />

            <InputText 
              type="number" 
              title="Preço (R$)" 
              placeholder="49,99" 
              value={price} 
              onChange={e => setPrice(e.target.value)}
            />
          </InputContainer>

          <InputTextArea 
            title="Descrição" 
            value={description} 
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição." 
            onChange={e => setDescription(e.target.value)}
          />
          
          <ButtonContainer>
            <Button 
              title="Salvar Alterações" 
              onClick={handleSavePrato}
            />
          </ButtonContainer>
          
        </Content> 
      }
      <Footer />
    </Container>
  )
}
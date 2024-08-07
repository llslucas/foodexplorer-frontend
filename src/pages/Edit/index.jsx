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

import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

//import foodList from "../../utils/foodList";

export function Edit(){   
  const navigate = useNavigate();
  const params = useParams();  

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
    setIngredientes([...ingredientes, newIngrediente]);
    setNewIngrediente("");
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

  async function handleSavePrato(){   
    try{
      const prato = {      
        name,
        description,
        category,
        price,
        ingredientes,
      } 
  
      if(image){
        const fileUploadForm = new FormData();
        fileUploadForm.append("image", image);      

        await api.patch(`/pratos/image/${params.id}`, fileUploadForm);
      }

      const response = await api.patch(`/pratos/${params.id}`, prato);      

      alert(response.data);

      navigate("/");
    }catch(e){
      if(e.response){
        alert(e.response.data.message);
      }else{
        alert("Não foi possível atualizar o prato.");
      }
    }
  }

  async function handleDeletePrato(){
    const confirm = window.confirm("Deseja realmente excluir este prato?");

    if(confirm){
      try{
        const response = await api.delete(`/pratos/${params.id}`);
        alert(response.data);
        navigate("/");
      }catch(e){
        alert("Não foi possível excluir o prato.");
      }
    }
  }

  async function handleImageChange(e){
    const file = e.target.files[0];
    setImage(file);    
  }
  
  useEffect(() => {
    async function fetchPrato(){
      try{
        const response = await api.get(`/pratos/${params.id}`);
        //console.log(response.data);

        const prato = response.data;

        setName(prato.name);
        setCategory(prato.category);
        setIngredientes(prato.ingredientes);
        setPrice(prato.price);
        setDescription(prato.description);        
      }catch(e){
        console.log(e);
        navigate("/");
      }
    };

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

    fetchPrato();
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
          
          <h1>Editar prato</h1>  

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
              title="Excluir Prato" 
              onClick={handleDeletePrato}
            />

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
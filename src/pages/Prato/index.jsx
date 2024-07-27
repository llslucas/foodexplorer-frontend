import { Container, Content, Voltar, Tags, Pedido, PratoContainer, ImgContainer, InfoContainer } from "./styles";

import { HeaderMobile } from "../../components/HeaderMobile";
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { Footer } from "../../components/Footer";
import { MenuMobile } from "../../components/MenuMobile";
import { Stepper } from "../../components/Stepper";

import { MdArrowBackIos } from "react-icons/md";
import { PiReceipt } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";

import foodList from "../../utils/foodList";
import user from "../../utils/user";

import { useState } from "react";
import { Button } from "../../components/Button";

export function Prato(){
  const navigate = useNavigate();
  const params = useParams();

  const [isMenuActive, setMenuActive] = useState(false);
  function handleMenuClick(){
    setMenuActive(prevState => !prevState);
  }

  const [quantity, setQuantity] = useState(1);

  function handleAddQuantity(){
    if(quantity < 99)
      setQuantity(quantity + 1);
  } 

  function handleRemoveQuantity(){
    if(quantity > 1)
      setQuantity(quantity - 1);
  }       

  const food = foodList[params.id];   

  return (
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
          <PratoContainer>
            <ImgContainer>
              <img src={food.img} />          
            </ImgContainer>
            <InfoContainer>
              <h2>{food.name}</h2>
              <p>{food.description}</p>          
              <Tags>
                {food.ingredientes.map((tag, index) =>                  
                  <span key={index}>{tag}</span>
                )}   
              </Tags>
              <Pedido>
                {!user.isAdmin && <Stepper count={quantity} onMinusClick={handleRemoveQuantity} onPlusClick={handleAddQuantity} />}
                <Button title={user.isAdmin ? "Editar Prato" : `pedir R$ ${food.price * quantity}`} icon={!user.isAdmin && PiReceipt} />
              </Pedido>
            </InfoContainer>
          </PratoContainer>
        </Content>
      }
      <Footer />
    </Container>
  )
}
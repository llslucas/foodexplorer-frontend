import { Container, Content } from "./styles";
import { HeaderMobile } from "../../components/HeaderMobile";
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { Footer } from "../../components/Footer";
import { HeadLine } from "../../components/HeadLine";
import { FoodSlider } from "../../components/FoodSlider";
import { MenuMobile } from "../../components/MenuMobile";

import foodList from "../../utils/foodList";

import { useState } from "react";

export function Home(){   
  const [isMenuActive, setMenuActive] = useState(false);
  function handleMenuClick(){
    setMenuActive(prevState => !prevState);
  }

  return(    
    <Container>
      <HeaderMobile data-mobile-only isMenuActive={isMenuActive} onMenuClick={handleMenuClick} />
      <HeaderDesktop data-desktop-only />
      {isMenuActive && <MenuMobile /> }
      {!isMenuActive && 
        <Content>
          <HeadLine />
          <FoodSlider title="Refeições" foodList={foodList} />    
          <FoodSlider title="Pratos Principais" foodList={foodList} />    
        </Content> 
      }
      <Footer />
    </Container>
  )
}
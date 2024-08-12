import { useEffect } from "react";

import { Container, Content } from "./styles";
import { HeaderMobile } from "../../components/HeaderMobile";
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { Footer } from "../../components/Footer";
import { HeadLine } from "../../components/HeadLine";
import { FoodSlider } from "../../components/FoodSlider";
import { MenuMobile } from "../../components/MenuMobile";

import { useState } from "react";
import { api } from "../../services/api";

export function Home(){   
  const [isMenuActive, setMenuActive] = useState(false);
  const [categories, setCategories] = useState([]);
  const [pratos, setPratos] = useState([]);
  const [search, setSearch] = useState('');

  function handleMenuClick(){
    setMenuActive(prevState => !prevState);
  }  

  useEffect(() => {
    async function fetchPratos(){      
        const response = await api.get(`/pratos?search=${search}`);
        //console.log(response.data);    
        const pratos = response.data;
        setPratos(pratos);

        const categories = pratos.map(prato => prato.category);
        const uniqueCategories = [... new Set(categories)];        

        setCategories(uniqueCategories);
    };   
    
    fetchPratos();    
  }, [search])

  return(    
    <Container>
      <HeaderMobile data-mobile-only isMenuActive={isMenuActive} onMenuClick={handleMenuClick} />
      <HeaderDesktop data-desktop-only onSearch={e => setSearch(e.target.value)}/>
      {isMenuActive && <MenuMobile /> }
      {!isMenuActive && 
        <Content>
          <HeadLine />
          {categories.map((category, index) => {            
            return(
              <FoodSlider key={index} title={category} foodList={pratos.filter(prato => prato.category === category)} />              
            )
          })}
        </Content> 
      }
      <Footer />
    </Container>
  )
}
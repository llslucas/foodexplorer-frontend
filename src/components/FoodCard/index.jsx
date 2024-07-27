import {Container, ProductName, ProductDescription, Price, IncludeContainer} from "./styles";
import { PiHeartBold, PiHeartFill, PiPencilSimple } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import { Button } from '../Button'
import { IconButton } from "../IconButton";
import { Stepper } from "../Stepper";

import { useState } from "react";

import user from "../../utils/user";

export function FoodCard({food}){

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  function handleAddQuantity(){
    if(quantity < 99)
      setQuantity(quantity + 1);
  } 

  function handleRemoveQuantity(){
    if(quantity > 1)
      setQuantity(quantity - 1);
  }    

  function getIcon(){
    if(user.isAdmin === true){
      return PiPencilSimple;
    }else{
      return food.favorite ? PiHeartFill : PiHeartBold;
    }
  }

  function handleIconClick(){
    if(user.isAdmin === true){
      navigate(`/edit/${food.id}`);
    }else{
      
    }
  }
  
  return(
    <Container data-prato-id={food.id}>      
      <IconButton icon={getIcon()} data-move-to-corner onClick={handleIconClick}  />     

      <img src={food.img} />

      <ProductName onClick={e => navigate(`/prato/${food.id}`)}>
        {food.name}
      </ProductName>

      <ProductDescription>
        {food.description}
      </ProductDescription>

      <Price>
        {`R$ ${Math.round(food.price * quantity * 100)/100}`}
      </Price>

      {
      !user.isAdmin &&
      <IncludeContainer>
        <Stepper count={quantity} onMinusClick={handleRemoveQuantity} onPlusClick={handleAddQuantity}/>          
        <Button title={"incluir"}  />               
      </IncludeContainer>      
      }
    </Container>
  )
}
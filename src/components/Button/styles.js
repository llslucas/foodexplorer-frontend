import styled from "styled-components";

export const Container = styled.button`    
  width: 100%;
  height: ${({$height})=> $height ? $height : "100%"};
  min-height: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  // Poppins Smaller Medium 
  font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
  font-size: ${({theme}) => theme.FONTS.SIZE.SMALLER};
  font-weight: ${({theme}) => theme.FONTS.WEIGHT.MEDIUM};
  text-align: center;

  border: none;  
  border-radius: 8px;

  cursor: pointer;

  &:hover{
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  }
`
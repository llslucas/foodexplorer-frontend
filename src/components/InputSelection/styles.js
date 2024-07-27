import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;  
  flex-direction: column;
  gap: 8px;

  //Roboto Small Regular
  font-family: ${({theme}) => theme.FONTS.FAMILY.ROBOTO};
  font-size: ${({theme}) => theme.FONTS.SIZE.SMALL};
  font-weight: ${({theme}) => theme.FONTS.WEIGHT.REGULAR};
  color: ${({theme}) => theme.COLORS.LIGHT_400};    
`

export const InputContainer = styled.div`
  width: 100%;  
  padding: 0.5rem 0.875rem;

  display: flex;
  flex-direction: row;
  align-items: center;  
  gap: 0.5rem;

  background-color: ${({theme}) => theme.COLORS.DARK_900};   

  border-radius: 8px;   

  >svg{
    color: ${({theme}) => theme.COLORS.LIGHT_200}; 
    width: 2rem;
    height: 2rem;
  }

  .select-input{    
    width: 100%;    

    .select__control{
      color: ${({theme}) => theme.COLORS.LIGHT_100};       
    }
    
    .select__indicators{
      gap: 0.5rem;
    }

    .select__indicator-separator{      
      width: 1px;
      background-color: ${({theme}) => theme.COLORS.LIGHT_100};
      margin-bottom: 8px;
      margin-top: 8px;
    }

    .select__menu{   
      background-color: ${({theme}) => theme.COLORS.LIGHT_100};
      padding: 0.5rem;
      border-radius: 0.5rem;
    }

    .select__option{
      padding: 0.5rem;
      color: ${({theme}) => theme.COLORS.DARK_1000};
    }

    .select__option:hover{
      background-color: ${({theme}) => theme.COLORS.CAKE_100};
      color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    .select__placeholder{
      color: ${({theme}) => theme.COLORS.LIGHT_500};
    }        
  }   

  &:focus-within{
    outline: 1px solid white;    
  }
`
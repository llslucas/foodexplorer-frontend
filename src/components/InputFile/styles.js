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
  color: ${({theme}) => theme.COLORS.LIGHT_200};    
`

export const InputContainer = styled.div`
  width: 100%;  
  padding: 0.5rem 0.875rem;

  display: flex;
  flex-direction: row;
  align-items: center;  
  justify-content: center;
  gap: 0.5rem;

  background-color: ${({theme}) => theme.COLORS.DARK_900};  

  border-radius: 8px;   

  >label{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;  
    justify-content: center;
    gap: 0.8rem;

    >svg{    
      width: 2rem;
      height: 2rem;
    }
  }

  >input{    
    width: 0;
    opacity: 0;
  } 

  &:focus-within{
    outline: 1px solid white;
  }
`
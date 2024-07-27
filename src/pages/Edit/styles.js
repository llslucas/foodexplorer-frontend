import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;    
  
  height: 100vh;
  grid-template-areas:
  "header"  
  "content"
  "footer";
  grid-template-rows: 6.5rem 1fr 5rem;
  gap: 1rem;  
`
 
export const Content = styled.main`  
  grid-area: content;
  padding: 0 clamp(0px, 10vw, 56px); 
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  >h1{
    font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
    font-size: ${({theme}) => theme.FONTS.SIZE.BIGGEST};
    font-weight: ${({theme}) => theme.FONTS.WEIGHT.MEDIUM};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 123px;
    display: flex;
    flex-direction: column;   
    
    >div:nth-child(4){
      >div:first-child{
        flex-shrink: 0.5;
      }
    }
  }    
`

export const Voltar = styled.button`
  display: flex;
  align-items: center;

  align-self: start;
  background: transparent;
  border: none;

  font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
  font-size: ${({theme}) => theme.FONTS.SIZE.BIGGER};
  font-weight: ${({theme}) => theme.FONTS.WEIGHT.MEDIUM};
  color: ${({theme}) => theme.COLORS.LIGHT_300};

  cursor: pointer;

  >svg{
    width: 2rem;
    height: 2rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {    
    flex-direction: row;
  }
`;

export const ButtonContainer = styled.div`    
  display: flex;
  flex-direction: row;
  gap: 2rem;

  >button{
    padding: 0.875rem 0;

    &:first-child{
      background-color: ${({theme}) => theme.COLORS.DARK_800};

      &:hover{
        background-color: ${({theme}) => theme.COLORS.DARK_1000};
      }
    }

    &:last-child{
      background-color: ${({theme}) => theme.COLORS.TOMATO_400};

      &:hover{
        background-color: ${({theme}) => theme.COLORS.TOMATO_200};
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {        
    align-self: flex-end;    

    >button{
      width: 11rem;
    }
  }
`
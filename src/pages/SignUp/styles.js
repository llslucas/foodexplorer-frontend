import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"
import styled from "styled-components";

export const Container = styled.div`
  //Mobile-First
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;    
  align-items: center;

  padding-top: 10rem;
  gap: 5rem;  

  > div:first-child{
    max-width: 280px;    
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: grid;    
    grid-template-columns: 1fr 1fr;   
    padding-top: 0;
    gap: 0;

    > div:first-child{
      max-width: 324px;   
      place-self: center; 
    }    
  }
`;

export const Form = styled.div`  
  place-self: center;
  width: 75%;
  max-width: 480px;
  display: flex;
  flex-direction: column;

  gap: 2rem;

  > h1{
    display: none;
  }
  
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    padding: 64px;
    border-radius: 16px;

    > h1{
      display: inline;

      font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
      font-size: ${({theme}) => theme.FONTS.SIZE.BIGGEST};
      font-weight: ${({theme}) => theme.FONTS.WEIGHT.MEDIUM};
      text-align: center;
    }
  }
`
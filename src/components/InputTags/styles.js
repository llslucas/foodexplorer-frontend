import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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
  padding: 0.875rem;

  display: flex;  
  flex-wrap: wrap;
  
  align-items: center;  
  justify-content: start;
  gap: 0.5rem;  

  background-color: ${({theme}) => theme.COLORS.DARK_900};  

  border-radius: 8px;     

  &:focus-within{
    outline: 1px solid white;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0.5rem 0.875rem;
  }
`
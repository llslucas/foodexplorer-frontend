import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  
  display: flex;
  flex-direction: column;
  gap: 1.5rem;    

  >h2{
    font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
    font-size: ${({theme}) => theme.FONTS.SIZE.MEDIUM};
    font-weight: ${({theme}) => theme.FONTS.WEIGHT.MEDIUM};
    color: ${({theme}) => theme.COLORS.LIGHT_300};  
    padding-left: 1rem;  
  }

  >div{
    padding: 0 1rem;
    ul{
      gap: 1rem;
      @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        gap: 1.5rem;
      }
    }
  }  

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {   
    padding: 0 3rem;
    
    >h2{
      font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
      font-size: ${({theme}) => theme.FONTS.SIZE.BIGGEST};
      font-weight: ${({theme}) => theme.FONTS.WEIGHT.MEDIUM};
      color: ${({theme}) => theme.COLORS.LIGHT_300};  
      padding-left: 1rem;  
    } 
  }
`;
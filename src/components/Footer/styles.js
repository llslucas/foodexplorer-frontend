import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.footer`
  grid-area: footer;
  width: 100%;  

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  background-color: ${({theme}) => theme.COLORS.DARK_600}; 

  >div{
    width: 8.5rem;    
  }  

  >p{
    font-family: ${({theme}) => theme.FONTS.FAMILY.ROBOTO};
    font-size: ${({theme}) => theme.FONTS.SIZE.SMALLER};
    font-weight: ${({theme}) => theme.FONTS.WEIGHT.REGULAR};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 124px;    

    >div{
      width: 11.5rem;    
    } 
  }
`;
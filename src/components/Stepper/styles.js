import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  justify-self: center;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  
  align-items: center;       
  justify-content: space-between;

  color: ${({theme}) => theme.COLORS.LIGHT_300};

  >span{
    font-family: ${({theme}) => theme.FONTS.FAMILY.ROBOTO};
    font-size: ${({theme}) => theme.FONTS.SIZE.BIGGER};
    font-weight: ${({theme}) => theme.FONTS.WEIGHT.REGULAR};
    text-align: center;
  }

  svg{
    max-height: 1.5rem;       
  } 
`
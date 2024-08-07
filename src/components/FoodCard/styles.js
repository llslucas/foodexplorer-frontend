import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 210px;
  height: 290px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;

  background-color: ${({theme}) => theme.COLORS.DARK_200};
  border-radius: 8px;

  >img{
    width: 90px;
    height: 90px;
  }

  >[data-move-to-corner]{
    width: 22px;
    position:absolute;
    top: 16px;
    right: 16px;  
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 304px;
    height: 462px;    

    >img{
      width: 176px;
      height: 176px;

      
      object-fit: contain;      
    }
  }
`;

export const ProductName = styled.button`
  background-color: transparent;
  border: none;

  color: ${({theme}) => theme.COLORS.LIGHT_300};
  font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
  font-size: ${({theme}) => theme.FONTS.SIZE.SMALLER};
  font-weight: ${({theme}) => theme.FONTS.WEIGHT.MEDIUM};
  text-align: center;

  cursor: pointer;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
    font-size: ${({theme}) => theme.FONTS.SIZE.BIGGER};
    font-weight: ${({theme}) => theme.FONTS.WEIGHT.BOLD};   
  }
`

export const ProductDescription = styled.p`
  display: none;

  font-family: ${({theme}) => theme.FONTS.FAMILY.ROBOTO};
  font-size: ${({theme}) => theme.FONTS.SIZE.SMALLER};
  font-weight: ${({theme}) => theme.FONTS.WEIGHT.REGULAR}; 
  text-align: center; 
  line-height: 160%;

  color: ${({theme}) => theme.COLORS.LIGHT_400};

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: inline;     
  }
`

export const Price = styled.p`
  color: ${({theme}) => theme.COLORS.CAKE_200};
  font-family: ${({theme}) => theme.FONTS.FAMILY.ROBOTO};
  font-size: ${({theme}) => theme.FONTS.SIZE.SMALL};
  font-weight: ${({theme}) => theme.FONTS.WEIGHT.REGULAR};

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: inline;  
    
    font-family: ${({theme}) => theme.FONTS.FAMILY.ROBOTO};
    font-size: ${({theme}) => theme.FONTS.SIZE.BIGGEST};
    font-weight: ${({theme}) => theme.FONTS.WEIGHT.REGULAR};
  }
`

export const IncludeContainer = styled.div`
  width: 100%;
  max-width: 13rem;
  display: flex;
  flex-direction: column;
 

  align-items: center;
  gap: 1rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: grid;
    grid-template-columns: 1fr 1fr;    
  }
`
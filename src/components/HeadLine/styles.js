import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  grid-area: headline;
  width: 100%;   
  max-width: 500px;

  height: 9.375rem;  
  align-self: center;

  position: relative;  

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {   
   height: 24rem;
   max-width: 100%;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;  
  height: 100%;    
   
  display: grid;    
  grid-template-columns: 0.75fr 1fr;    
  gap: 0.5rem;  

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    grid-template-columns: 1fr 1fr;  
    padding: 0 70px;
  }
`

export const ImgContainer = styled.div` 
  overflow: hidden;   

  >img{    
    width: 100%;    
    filter: drop-shadow(3px 3px 5px ${({theme}) => theme.COLORS.DARK_400});
  }
`

export const TextContainer = styled.div`  
  width: 100%;  
  max-width: 250px;    
  height: 80%; 
  align-self: flex-end;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;    

  >h2{
    //Poppins Semibold 18px
    font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
    font-size: clamp(
        ${({theme}) => theme.FONTS.SIZE.SMALL}, 
        3vw, 
        ${({theme}) => theme.FONTS.SIZE.MEDIUM});
    font-weight: ${({theme}) => theme.FONTS.WEIGHT.SEMIBOLD};    
  }
  
  >h3{
    //Poppins Regular 12px
    font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
    font-size: clamp(
        ${({theme}) => theme.FONTS.SIZE.TINY}, 
        3vw, 
        ${({theme}) => theme.FONTS.SIZE.SMALLEST});
    font-weight: ${({theme}) => theme.FONTS.WEIGHT.REGULAR};    
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 66%;    
    max-width: 100%; 

    >h2{
      //Poppins Medium 42px
      font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
      font-size: ${({theme}) => theme.FONTS.SIZE.GIANT};       
      font-weight: ${({theme}) => theme.FONTS.WEIGHT.MEDIUM};
    }
    
    >h3{
      //Roboto Small Regular
      font-family: ${({theme}) => theme.FONTS.FAMILY.ROBOTO};
      font-size: ${({theme}) => theme.FONTS.SIZE.SMALL};       
      font-weight: ${({theme}) => theme.FONTS.WEIGHT.REGULAR};
    }
  }
`
export const Background = styled.div`  
  background: ${({theme}) => theme.COLORS.GRADIENT_200};   
  width: 90%;
  height: 80%; 
  z-index: -1;

  border-radius: 3px;

  position: absolute;  
  bottom: 0;
  right: 4%;  

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 66%; 
    width: calc(100% - 225px);
    left: 150px;
  }
`;


import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`  
  width: 100%;
  height: 100vh;
 
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-rows: 6.5rem 1fr 5rem;
  gap: 3rem;
`;

export const Content = styled.main`
  grid-area: content;
  padding: 0 clamp(0px, 10vw, 56px); 

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 123px;
  }
`;

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

export const PratoContainer = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  
  gap: 1rem;     
  
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: grid;
    grid-template-columns: 0.75fr 1fr;
    justify-content: center;
  }
`;

export const ImgContainer = styled.div`
  justify-self: center;  

  >img{    
    width: 100%;
    max-width: 320px;
    padding: 0 26px;
    aspect-ratio: 1;
    object-fit: contain;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      max-width: 500px;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  
  gap: 1.5rem; 

  >h2{
    font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
    font-size: clamp(
      ${({theme}) => theme.FONTS.SIZE.SMALL},
      7vw,
      ${({theme}) => theme.FONTS.SIZE.BIGGER});
    font-weight: ${({theme}) => theme.FONTS.WEIGHT.MEDIUM};
    text-align: center;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {    
      text-align: left;  
      font-size: clamp(
      ${({theme}) => theme.FONTS.SIZE.BIG},
      3.5vw,
      ${({theme}) => theme.FONTS.SIZE.GIANT});
    }
  }

  >p{
    font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
    font-size: clamp(
      ${({theme}) => theme.FONTS.SIZE.SMALLEST},
      5vw,
      ${({theme}) => theme.FONTS.SIZE.SMALL});
    font-weight: ${({theme}) => theme.FONTS.WEIGHT.REGULAR};
    text-align: center;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {      
      text-align: left;
      font-size: clamp(
      ${({theme}) => theme.FONTS.SIZE.SMALL},
      2vw,
      ${({theme}) => theme.FONTS.SIZE.BIGGER});
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    align-items: start;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;  

  justify-content: center;

  >span{
    background-color: ${({theme}) => theme.COLORS.DARK_1000};
    padding: 4px 8px;

    font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
    font-size:clamp(
      ${({theme}) => theme.FONTS.SIZE.SMALLEST},
      4vw,
      ${({theme}) => theme.FONTS.SIZE.SMALLER});
    font-weight: ${({theme}) => theme.FONTS.WEIGHT.MEDIUM};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    border-radius: 5px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    justify-content: start;
  }
`

export const Pedido = styled.div`
  width: 100%;
  
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;     

  >button{
    height: 48px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: 1.5rem;
    
    gap: 2rem; 
    max-width: 400px;
    grid-template-rows: 1fr;
    grid-template-columns: 0.75fr 1fr;
  }
`
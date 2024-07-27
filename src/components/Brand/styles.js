import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 0.5rem;
  color: ${({theme}) => theme.COLORS.CAKE_200};

  cursor: pointer;

  >svg{
    >path:nth-child(1){
    fill: ${({theme, $color: color}) => color ? color : theme.COLORS.CAKE_100};
    }

    >path:nth-child(2){
      fill: ${({theme, $color: color}) => color ? color : theme.COLORS.LIGHT_100};
    } 
  }

  >span{
    font-family: ${({theme}) => theme.FONTS.FAMILY.ROBOTO};
    font-size: ${({theme}) => theme.FONTS.SIZE.SMALLEST};
    font-weight: ${({theme}) => theme.FONTS.WEIGHT.REGULAR};
  }  
`


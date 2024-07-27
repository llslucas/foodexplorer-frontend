import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border: none;

  color: ${({theme}) => theme.COLORS.LIGHT_100};

  >svg{
    width: 100%;
    height: 100%;
  }

  position: relative;
  cursor: pointer;
`;

export const Counter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;  

  width: 1.5rem;
  height: 1.5rem;

  background-color: ${({theme}) => theme.COLORS.TOMATO_100};

  //Poppins Medium 14px
  font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
  font-size: ${({theme}) => theme.FONTS.SIZE.SMALLER};
  font-weight: ${({theme}) => theme.FONTS.WEIGHT.MEDIUM};
  line-height: 0;
   
  border-radius: 50%; 

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;
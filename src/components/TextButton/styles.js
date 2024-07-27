import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  background: none;
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  // Poppins Smaller Medium 
  font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
  font-size: ${({theme}) => theme.FONTS.SIZE.SMALLER};
  font-weight: ${({theme}) => theme.FONTS.WEIGHT.MEDIUM};
  text-align: center;

  border: none;

  cursor: pointer;
`
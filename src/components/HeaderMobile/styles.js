import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  display: flex;
  justify-content: ${({$isMenuActive}) => $isMenuActive ? "start" : "space-between"};
  align-items: center;

  width: 100%;  
  padding: 28px;

  background-color: ${({theme}) => theme.COLORS.DARK_600}; 

  >div{
    width: ${($userIsAdmin) => $userIsAdmin ?  "13rem"  : "10rem"};
  }

  >button{
    width: 2rem;
  }  

  >p{
    font-family: ${({theme}) => theme.FONTS.FAMILY.ROBOTO};
    font-size: ${({theme}) => theme.FONTS.SIZE.BIG};
    font-weight: ${({theme}) => theme.FONTS.WEIGHT.REGULAR};
    margin-left: 1rem;
  }
`;
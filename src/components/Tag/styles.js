import styled from 'styled-components';

export const Container = styled.div`      
  display: flex;      
  gap: 0.5rem;
  padding: 0.5rem 1rem;  

  background-color: ${({theme, $isNew}) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};
  border: ${({theme, $isNew}) => $isNew ? `2px dashed ${theme.COLORS.LIGHT_600}` : "none"};
  border-radius: 0.5rem; 

  >input{   
    max-width: 100px;        
    background: transparent;
    border: none;

    color: ${({theme}) => theme.COLORS.LIGHT_100};;
    font-family: ${({theme}) => theme.FONTS.FAMILY.ROBOTO};
    font-size: ${({theme}) => theme.FONTS.SIZE.SMALL};
    font-weight: ${({theme}) => theme.FONTS.WEIGHT.REGULAR};

    &:focus{
      background: transparent;
      border: none;
      outline: none;
    }

    &::placeholder{
      color: ${({theme}) => theme.COLORS.LIGHT_600};
    }
  }

  >p{        
    color: ${({theme}) => theme.COLORS.LIGHT_100};;
    font-family: ${({theme}) => theme.FONTS.FAMILY.ROBOTO};
    font-size: ${({theme}) => theme.FONTS.SIZE.SMALL};
    font-weight: ${({theme}) => theme.FONTS.WEIGHT.REGULAR};
  }
`;
import styled from 'styled-components';

export const Container = styled.div`
  /* Para aparecer na parte central do viewport */
  grid-area: content;  

  width: 100%;
  height: 100%;
  padding: 0 2.25rem; 

  display: flex;
  flex-direction: column;  
  gap: 2.25rem;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;    
`

export const Option = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.LIGHT_700};
  padding: 10px;

  font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
  font-size: ${({theme}) => theme.FONTS.SIZE.BIGGER};
  font-weight: ${({theme}) => theme.FONTS.WEIGHT.LIGHT};
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  text-align: left;
`


import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  position: fixed;
  z-index: 2;

  display: grid;
  grid-template-columns: 12rem 1fr 13.5rem 2rem;
  align-items: center;
  gap: 2rem;

  width: 100%;  
  padding: 28px 123px;

  background-color: ${({theme}) => theme.COLORS.DARK_600};    
`;
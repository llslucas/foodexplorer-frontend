import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;    
  
  height: 100vh;
  grid-template-areas:
  "header"  
  "content"
  "footer";
  grid-template-rows: 6.5rem 1fr 5rem;
  gap: 1rem;

  >main{
    margin-bottom: 2rem;        
  }
`
 
export const Content = styled.main`  
  grid-area: content;
  justify-self: center;
  
  max-width: ${DEVICE_BREAKPOINTS.XL};  
  display: flex;
  flex-direction: column;
  gap: 1.5rem;    
`
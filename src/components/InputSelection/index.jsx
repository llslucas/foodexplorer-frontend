import { Container, InputContainer } from "./styles";

import CreatableSelect from 'react-select/creatable';

export function InputSelection({title, ...rest}){ 
  return(
    <Container>
      {title && <p>{title}</p>}
      <InputContainer>
        <CreatableSelect
          className="select-input"  
          classNamePrefix="select"                            
          formatCreateLabel={inputValue => `Criar categoria ${inputValue}`}                 
          isClearable         
          isSearchable
          unstyled          
          {...rest}
        />       
      </InputContainer>
    </Container>
  )
}
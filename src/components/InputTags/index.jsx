import { Tag } from "../Tag";
import { Container, InputContainer } from "./styles";

export function InputTags({title, tags, onAdd, onRemove, onChange, ...rest}){

  function handleRemoveTag(e, title){
    onRemove(title);
  }
  
  return(
    <Container>
      {title && <p>{title}</p>}
      <InputContainer>
        {tags && 
          tags.map(tag => 
          <Tag title={tag} onClick={handleRemoveTag} />)
        }
        <Tag 
          onClick={onAdd} 
          onChange={onChange} 
          isNew 
          {...rest} 
        />
      </InputContainer>
    </Container>
  )
}
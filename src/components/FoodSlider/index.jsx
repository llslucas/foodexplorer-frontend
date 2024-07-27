import { Container } from './styles';
import { FoodCard } from '../FoodCard';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export function FoodSlider({title, foodList}){ 
  return (
    <Container>
      <h2>
        {title}
      </h2>

      <Splide options={{      
        autoWidth: true,          
        drag: 'free',                         
        arrows: true,       
        pagination: false, 
      }}>
        {foodList.map((food) =>
          <SplideSlide key={food.id} >
            <FoodCard  food={ food } />
          </SplideSlide>    
        )}    
      </Splide>

    </Container>
  )
}
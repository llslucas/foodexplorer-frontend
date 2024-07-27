import { Container } from "./styles";
import { IconButton } from "../IconButton";

import { PiPlusBold, PiMinusBold } from "react-icons/pi";

export function Stepper({count, onMinusClick, onPlusClick}){
  return (
    <Container>
      <IconButton icon={PiMinusBold} onClick={onMinusClick} />
      <span>{count}</span>
      <IconButton icon={PiPlusBold} onClick={onPlusClick} />
    </Container>
  )
}
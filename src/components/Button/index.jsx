import React from "react";
import { StyledButton } from "./styles";

function Button(props) {
  return (
    <StyledButton onClick={props.onClick} style={{ backgroundColor: props.backgroundColor }}>
      {props.text}
    </StyledButton>
  );
}

export default Button;

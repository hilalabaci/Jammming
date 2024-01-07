import React from "react";
import { Container } from "./styles";

function ListContainer(props) {
  return <Container>{props.children}</Container>;
}

export default ListContainer;

import React from "react";
import { Container, Icon, InfoWrapper, SubTitle, Title } from "./styles";

function Track(props) {
  return (
    <Container>
      <InfoWrapper>
        <Title>{props.title}</Title>
        <SubTitle>{props.subTitle}</SubTitle>
      </InfoWrapper>
      <Icon onClick={props.onAction}>{props.icon}</Icon>
    </Container>
  );
}

export default Track;

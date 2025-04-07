import React from "react";
import {
  Future,
  Infos,
  Titles,
  Left,
  Right,
  Container,
  Arrow,
  Paragraph,
} from "./styles";

export const IntroSection: React.FC = () => {
  return (
    <Container>
      <Left>
        <Infos>
          <Titles data-aos="fade-right" data-aos-duration="600">Design Inovação Integração</Titles>
        </Infos>
        <Future data-aos="fade-up-right" data-aos-duration="600">
          <Paragraph >o futuro é agora.</Paragraph>
        </Future>
        <Right src="images/principalimage.png" />
      </Left>
      <Arrow src="icons/arrows.svg" data-aos="zoom-in" data-aos-duration="600"/>
    </Container>
  );
};

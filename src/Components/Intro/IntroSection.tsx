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
          <Titles>Design Inovação Integração</Titles>
        </Infos>
        <Future>
          <Paragraph>o futuro é agora.</Paragraph>
        </Future>
        <Right src="images/principalimage.png" />
      </Left>
      <Arrow />
    </Container>
  );
};

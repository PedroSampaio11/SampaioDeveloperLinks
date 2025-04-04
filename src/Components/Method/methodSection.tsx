import React from "react";
import styled from "styled-components";
export const MethodSection: React.FC = () => {
  return (
    <Container>
      <Title>
        Meu <strong> Método</strong>
      </Title>
      <Image src="images/method.png" alt="imagem mostrando meu método" />
    </Container>
  );
};
const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 3.8rem;
  margin: 0;
  line-height: 0.8;
  letter-spacing: -1.1px;
  padding: 0;
  font-weight: 500;
  strong {
    font-weight: bolder !important;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

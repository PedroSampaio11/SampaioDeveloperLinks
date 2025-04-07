import styled from "styled-components";
const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;
  padding: 2rem 0;
`;
const Card = styled.a`
  border: 2px solid;
  width: 100%;
  height: 150px;
  border-radius: 8px;
`;
export const LinkSection = () => {
  return (
    <Container>
      <Card href="#"></Card>
      <Card href="#"></Card>
      <Card href="#"></Card>
    </Container>
  );
};

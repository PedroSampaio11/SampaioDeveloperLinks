import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  scroll-behavior: smooth;
  height: 100%;
  background-color: ${(props) => props.theme.colors.offBlack};
  font-family: 'Inter', sans-serif;
  padding: 1rem 7rem;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.purple500};
  @media screen and (max-width: 908px){
padding: 1rem 2rem;
  }
`;

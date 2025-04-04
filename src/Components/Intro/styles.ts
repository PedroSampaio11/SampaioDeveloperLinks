import styled from "styled-components";

export const Container = styled.section`
  height: auto;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  margin-top: 4rem;
`;

export const Left = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (max-width: 908px){
    gap: 2rem;
  }
`;
export const Infos = styled.div`
  width: 50%;
  padding: 0;
  margin: 0;
  
`;
export const Titles = styled.h1`
  font-size: 12rem;
  font-weight: 700;
  line-height: 0.77;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 908px){
    font-size: 5rem;
  }
`;

export const Future = styled.div`
border: 1px solid ${(props)=> props.theme.colors.gray500};
border-radius: 8px;
width: 25%;
padding: 2rem ;
display: flex;
justify-content: center;
align-items: center;
background-color:rgba(242, 242, 242, 0.02);
box-shadow: 0 0  22px 2px  rgba(242, 242, 242, 0.11);
@media screen and (max-width: 908px){
  width: 70%;
  padding: 1rem 0.4rem;
  }
`;
export const Paragraph = styled.p`
margin: 0;
color: ${(props)=> props.theme.colors.gray500};
font-size: 2.2rem;
font-weight: bold;
`;

export const Right = styled.img`
  height: 922px;
  width: auto;
  background-size: cover;
  object-fit: cover;
  position: absolute;
  top: -244px;
  right: -44px;
  box-sizing: border-box;
  @media screen and (max-width: 908px){
    height: 333px;
    top: 0;
    right: -111px;
  }
`;

export const Arrow = styled.img`

`;

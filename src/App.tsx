import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "./Components/Footer";
import { Main } from "./Components/Main";
import { Navbar } from "./Components/Navbar";
import { PageContainer } from "./Components/PageContainer";
import styled from "styled-components";

export const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    AOS.init();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 908);
    };

    handleResize(); // roda ao carregar
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    return (
      <BlockedScreen>
        <h1>Este site está disponível apenas para dispositivos móveis 📱</h1>
        <p>Acesse pelo seu celular para uma melhor experiência.</p>
      </BlockedScreen>
    );
  }

  return (
    <PageContainer>
      <Navbar />
      <Main />
      <Footer />
    </PageContainer>
  );
};

// Estilo da tela de bloqueio
const BlockedScreen = styled.div`
  height: 100vh;
  width: 100vw;
  background: #0f0f0f;
  color: ${(props) => props.theme.colors.purple500};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem;
  font-family: "Inter", sans-serif;
  h1{
    font-size: 3rem;
  }
  p{
    font-size: 1.8rem;
    font-weight: 400;
    color:  ${(props) => props.theme.colors.gray500};
  }
`;

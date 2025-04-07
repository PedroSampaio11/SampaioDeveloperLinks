import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 7rem;
  @media screen and (max-width: 908px){
    width: 100%;

  }
`;
export const NavLogo = styled.img`
  width: 14%;
  object-fit: cover;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 908px){
    width: 40%;
  }
`;
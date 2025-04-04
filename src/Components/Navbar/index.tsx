import { NavbarContainer, NavLogo } from "./styles";

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer data-aos="fade-up" data-aos-duration="500">
      <NavLogo src="icons/sampaiologo.svg"/>
    </NavbarContainer>
  );
};

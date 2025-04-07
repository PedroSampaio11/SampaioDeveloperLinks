import { NavbarContainer, NavLogo } from "./styles";

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer data-aos="fade-down" data-aos-duration="500">
      <NavLogo src="icons/sampaiologo.svg" data-aos="fade-right" data-aos-duration="600"/>
    </NavbarContainer>
  );
};

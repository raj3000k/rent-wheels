import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
  w-full
  max-w-2xl
  flex-row
  items-center
  justify-between

  `};
`;
const LogoContainer = styled.div`
  ${tw`
  `};
`;
export function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </NavbarContainer>
  );
}

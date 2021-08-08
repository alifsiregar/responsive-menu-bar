import React, { useState } from 'react';
import {
  Nav,
  NavLogo,
  MenuBar,
  DesktopMenu,
  MenuItems,
  MobileNav,
  MobileMenuToggle,
  MenuClose,
  MobileMenuItems,
} from './styles';
import { NavbarItems } from './NavbarItems';
import aeLogo from '../../assets/images/ae-logo.png';

const Navbar = (): JSX.Element => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const toggleMenu = ():void => {
    setShowNav(!showNav);
  };

  return (
    <>
      <Nav>
        <NavLogo src={aeLogo} />
        <MenuBar onClick={toggleMenu} />
        <DesktopMenu>
          { NavbarItems.map((item):JSX.Element => (
            <MenuItems exact={item.exact} to={item.path}>
              {item.name}
            </MenuItems>
          )) }
        </DesktopMenu>
      </Nav>
      <MobileNav isActive={showNav}>
        <MobileMenuToggle>
          <MenuClose onClick={toggleMenu} />
        </MobileMenuToggle>
        { NavbarItems.map((item):JSX.Element => (
          <MobileMenuItems onClick={toggleMenu} exact={item.exact} to={item.path}>
            {item.name}
          </MobileMenuItems>
        )) }
      </MobileNav>
    </>
  );
};
export default Navbar;

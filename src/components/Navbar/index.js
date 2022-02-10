import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavBarElements';

const Navbar = ({toggle, img, alt}) => {

    
    return (
   <>
<Nav>
    <NavbarContainer>
        <NavLogo src={img} alt={alt} />
        <MobileIcon onClick={toggle}>
            <FaBars />
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to="home">HOME</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="over">OVER MIJ</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="werkwijze">AANBOD</NavLinks>
            </NavItem>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to ="contact">CONTACT</NavBtnLink>
        </NavBtn>
    </NavbarContainer>
</Nav>
   </>
    )
}

export default Navbar;
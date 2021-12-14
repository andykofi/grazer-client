import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='about'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
              to='donate'
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
          >
            Donate
          </SidebarLink>
          <SidebarLink
            to='testimonial'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Testimonial
          </SidebarLink>
          <SidebarLink
            to='services'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Services
          </SidebarLink>
          <SidebarLink
              to='contact'
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
          >
            Contact Us
          </SidebarLink>
          <SidebarLink
              to='links'
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
          >
            Links
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/login'>Sign In</SidebarRoute>
        </SideBtnWrap><br/>
        <SideBtnWrap>
          <SidebarRoute to='/register'>Sign UP</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SideBarElements';

const Sidebar= ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to ="home" onClick={toggle}>
                       Home
                   </SidebarLink>
                   <SidebarLink to ="over" onClick={toggle}>
                       Over mij
                   </SidebarLink>
                   <SidebarLink to ="werkwijze" onClick={toggle}>
                       Aanbod
                   </SidebarLink>
               </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute to="/contact" onClick={toggle}>
                       Contact
                   </SidebarRoute>
               </SideBtnWrap>
           </SidebarWrapper>
       </SidebarContainer>
    )
}

export default Sidebar

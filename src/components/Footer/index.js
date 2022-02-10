import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkTitle, 
    FooterLinkItems, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
 } from './FooterElements'

const Footer = () => {
    return (
      <FooterContainer>
          <FooterWrap>
       
              <SocialMedia>
                  <SocialMediaWrap>
                      <SocialLogo to='home'>
                          CFBR
                      </SocialLogo>
                      <SocialLogo to='contact'>
                      tel: 0637175540
                      </SocialLogo>
                      <SocialLogo to='contact'>
                          mail: administratie@crfabre.com
                      </SocialLogo>
                      <WebsiteRights>CFBR © - {new Date().getFullYear()} Mogelijk gemaakt door MW</WebsiteRights>
                    
                  </SocialMediaWrap>
              </SocialMedia>
          </FooterWrap>
      </FooterContainer>
    )
}

export default Footer

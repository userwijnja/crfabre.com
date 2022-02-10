import React from 'react'
import { ContactH1, ContactContainer, ContactH3, ContactWrapper, ContactCard, ContactIcon, ContactH2, ContactP, BtnWrapper, BtnLink } from './ContactElements'
import Icon4 from '../../images/Icon-4.svg'
import Icon5 from '../../images/Icon-5.svg'


const ContactSection = () => {
    return (
        <>
            <ContactContainer>
            <ContactH1>Contact</ContactH1>
           <ContactH3>Neem vrijblijvend contact met me op via:</ContactH3>
            <ContactWrapper>
                <ContactCard>
                    <ContactIcon src={Icon5}/>
                    <ContactH2>E-mail:</ContactH2>
                    <ContactP>administratie@crfabre.com</ContactP>
                </ContactCard>
               
                <ContactCard>
                    <ContactIcon src={Icon4}/>
                    <ContactH2>Telefoon:</ContactH2>
                    <ContactP>06-37175540</ContactP>
                </ContactCard>
                </ContactWrapper>
                    <BtnWrapper>
               <BtnLink to="/">Terug</BtnLink>
                </BtnWrapper>
        </ContactContainer>
        </>
    )
}

export default ContactSection

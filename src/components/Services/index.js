import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesH3, ServicesP } from './ServicesElements'
import Icon1 from '../../images/Icon-1.svg'
import Icon2 from '../../images/Icon-2.svg'
import Icon3 from '../../images/Icon-3.svg'

const Services = () => {
    return (
        <ServicesContainer id="werkwijze">
            <ServicesH1>Aanbod</ServicesH1>
           <ServicesH3>Voor alle administratie op het gebied van Personeel & Organisatie kunt u bij mij terecht. Denk hierbij bijvoorbeeld aan het administratief verwerken van:</ServicesH3>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Arbeidscontracten en functieomschrijvingen</ServicesH2>
                    <ServicesP>.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Primaire en secundaire arbeidsvoorwaarden</ServicesH2>
                    <ServicesP>.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Ziekmeldingen en verlofregistratie</ServicesH2>
                    <ServicesP>.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>


        </ServicesContainer>
    )
}

export default Services

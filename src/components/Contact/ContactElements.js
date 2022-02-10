import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const ContactContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #4b6cb7;

@media screen and (max-width: 768px) {
    height: 1100px;
}

@media screen and (max-width: 480px) {
    height: 1300px;
}
`
export const ContactWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`
export const ContactCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`
export const ContactIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`

export const ContactH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 32px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`
export const ContactH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
color: midnightblue;
`

export const ContactH3 = styled.h3`
font-size: 1.5rem;
margin-bottom: 32px;
color: #fff;
max-width: 1000px;

@media screen and (max-width: 480px) {
    font-size: 1rem;
    max-width: 800px;
}
`
export const ContactP = styled.p`
font-size: 1rem;
text-align: center;
color: midnightblue;
`

export const BtnWrapper = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;
`

export const BtnLink = styled(LinkR)`
border-radius: 50px;
background: darkblue;
white-space: nowrap;
padding: 10px 22px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out; 
text-decoration:none;

&:hover{
    transition: all .2s ease-in-out;
    transform: scale(1.1);
    background: midnightblue;
    color: yellow;
}
`
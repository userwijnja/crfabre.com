import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
border-radius: 50px;
background: ${({primary}) => ( primary ? 'darkblue' : 'darkblue')
};
white-space: no-wrap;
padding: ${({big}) => ( big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => ( dark ? '#FFF': '#FFF')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
font-weight: 700;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
    color: midnightblue;
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => ( primary ? '#FFF' : 'yellow')
};  
}
`
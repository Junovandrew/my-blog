import React from 'react'
import styled from 'styled-components'

const Btn = (props) => {
    const label = props.children||props.label||'Button';
  return (
    <button {...props}>
        {label}
    </button>
  )
}

const Button = styled(Btn)`
    padding:10px 15px;
    border-radius: 6px;
    background-color: ${props=>props.bg||"#1e4fb8"};
    color:${props=>props.color||"white"};
    outline: none;
    border: none;
    display: flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    text-decoration:none;
    &:hover{
        background-color:transparent;
        border: 1px solid cyan;
        cursor: pointer;
    }
`
export default Button;
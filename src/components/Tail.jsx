import React from 'react'
import  Styled  from 'styled-components'
import {PiGithubLogoFill as BlogIcon} from 'react-icons/pi'
import {AiOutlineCopyright as CopyrightIcon} from 'react-icons/ai'


const Tail = () => {
  return (
    <Wrapper>
        <div>
            Nero Neko!
            <BlogIcon/>
        </div>
        <span>
            <CopyrightIcon/>
            Copyright 2030 All Rights Reserved
        </span>
    </Wrapper>
  )
}

export default Tail
const Wrapper = Styled.div`
padding:15px 30px;
display:grid;
grid-template-columns:1fr;
background-color:rgb(145, 5, 5);
color:white;
gap:5px;
/* align-items:center; */
/* justify-content:center; */
justify-items:center;
position:fixed;
width:100%;
left:0;
bottom:0;
z-index:20;
font-family:Arial;
font-weight:bold;
font-size:20px;
&>span{
    font-family:Arial;
    font-size:9px;
    color:grey; 
}
`
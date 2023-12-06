import React from 'react'
import  Styled  from 'styled-components'
import Button from './Button'
import{Link} from 'react-router-dom'
import {FaHome as HomeIcon} from 'react-icons/fa'
import {PiGithubLogoFill as BlogIcon} from 'react-icons/pi'
import {TfiGallery as GalleryIcon} from 'react-icons/tfi'

const Header = () => {
  return (
    <Wrapper>
        <span>
            Nero Neko! 
            <BlogIcon/>
        </span>
        <Link to="home">
            <Button >
                Home
                <HomeIcon/>
            </Button>
        </Link>
        <Link to="new">
            <Button bg="red" >
                New Blog
                <BlogIcon/>
            </Button>
        </Link>
        <Link to="gallery">
            <Button>
                Gallery
                <GalleryIcon/>
            </Button>
        </Link>
    </Wrapper>
  )
}

export default Header
const Wrapper = Styled.header`
padding:15px 30px 15px 30px;
display:flex;
background-color:rgb(42, 163, 151);
color:rgb(145, 5, 5);
gap:15px;
justify-content:center;
position:fixed;
width:100%;
left:0;
top:0;
&>span{
    font-family:Arial;
    font-weight:bold;
    font-size:20px;
    margin-right:700px;
}
&>a{
    text-decoration:none;
    text-align:center;
}
`
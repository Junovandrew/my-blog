import React from 'react'
import styled from 'styled-components'
import {TfiGallery as GalleryIcon} from 'react-icons/tfi'
import LuffyImg from '../assets/luffy2.jpg'
import NarutoImg from '../assets/naruto2.jpg'
import IchigoImg from '../assets/ichigo.jpg'
import AstaImg from '../assets/asta.jpg'
import ErenImg from '../assets/eren.jpg'
import ShigarakiImg from '../assets/shigaraki.jpg'
import DioImg from '../assets/dio.jpg'
import MuzanImg from '../assets/muzan2.jpg'

const Gallery = () => {
  return (
    <Wrapper>   
        <span>
            <input type="text" placeholder="search photographer..."/>
        </span>
            <span>
                Gallery            
                <GalleryIcon/>             
            </span>
            <section>
                <div>
                    <img src={LuffyImg}/>
                    <div>Title:<span>Monkey D. Luffy</span></div>
                    <div>Photo by:<span>Andrew</span></div>
                    <div>Description:<span>This image is the dopest iamge of this anime character
                        </span></div>  
                </div>                                        
                <div>
                    <img src={NarutoImg}/>
                    <div>Title:<span>Uzumaki Naruto</span></div>
                    <div>Photo by:<span>Drew</span></div>
                    <div>Description:<span>This image is the dopest iamge of this anime character
                        </span></div>
                </div>
                <div>
                    <img src={IchigoImg}/>
                    <div>Title:<span>Ichigo Kurosaki</span></div>
                    <div>Photo by:<span>Drex</span></div>
                    <div>Description:<span>This image is the dopest iamge of this anime character
                        </span></div>
                </div>
                <div>
                    <img src={AstaImg}/>
                    <div>Title:<span>Asta Staria</span></div>
                    <div>Photo by:<span>Junova</span></div>
                    <div>Description:<span>This image is the dopest iamge of this anime character
                        </span></div>
                </div>
                <div>
                    <img src={MuzanImg}/>
                    <div>Title:<span>Muzan Kibutsuji</span></div>
                    <div>Photo by:<span>Andrew</span></div>
                    <div>Description:<span>This image is the dopest iamge of this anime character
                        </span></div>
                </div>
                <div>
                    <img src={ShigarakiImg}/>
                    <div>Title:<span>Shigaraki Tomura</span></div>
                    <div>Photo by:<span>Tim</span></div>
                    <div>Description:<span>This image is the dopest iamge of this anime character
                        </span></div>
                </div>
                <div>
                    <img src={DioImg}/>
                    <div>Title:<span>Dio Brando</span></div>
                    <div>Photo by:<span>Danny</span></div>
                    <div>Description:<span>This image is the dopest iamge of this anime character
                        </span></div>
                </div>
                <div>
                    <img src={ErenImg}/>
                    <div>Title:<span>Eren Yeager</span></div>
                    <div>Photo by:<span>Nathan</span></div>
                    <div>Description:<span>This image is the dopest iamge of this anime character
                        </span></div>
                </div>
            </section>        
    </Wrapper>
  )
}

export default Gallery
const Wrapper = styled.section`
display:grid;
gap:30px;
padding: 0 100px 100px 100px;
&>span:nth-of-type(2){
    border:5px;
    font-family:Arial;
    font-size:24px;
    color:rgb(29, 114, 105);
    border-bottom:3px solid rgb(29, 114, 105);
}
&>section{
    padding:15px;
    border-radius:8px;
    box-shadow:0px 2px 5px 1px rgba(0,0,0,0.1);
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    gap:10px;
    text-decoration:none;
    
    justify-content:space-between;
    align-items:center;
    border-top:5px;

    
    & > div{
        display:grid;
        grid-template-columns:1fr;
        gap:5px;
        padding:10px;
        background-color:rgb(42, 163, 151);

         &>img{
        width:100%;
        height:300px;
        object-fit:contain;
        cursor: pointer;
        }
        & > div{
            font-family:Arial;
            margin-bottom:15px;
            color:rgb(15, 25, 145);
            border-bottom:1px solid white;

            & > span{
            font-family:Arial;
            color:white;
            
            }
            
        }
    }

    
   
}
`
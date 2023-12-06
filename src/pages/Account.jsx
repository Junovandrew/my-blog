import React,{useEffect, useState} from 'react'
import { Routes,Route,useLocation } from 'react-router-dom'
import Styled from 'styled-components'
import Header from '../components/Header'
import {Home,NewBlog,Gallery,Blog} from '.'
import Api from '../api';
import {Button} from '../components';
import Tail from '../components/Tail'
import { useDispatch, useSelector } from 'react-redux'
import {FaHome as HomeIcon} from 'react-icons/fa'
import {PiGithubLogoFill as BlogIcon} from 'react-icons/pi'
import {TfiGallery as GalleryIcon} from 'react-icons/tfi'
import { set_posts } from '../redux/reducers/postReducer'
import { set_comments } from '../redux/reducers/commentReducer'

const link_list=[
    {
        name:"Home",
        path:"home",
        icon:<HomeIcon/>
    },
    {
        name:"NewBlog",
        path:"new",
        icon:<BlogIcon/>
    },
    {
        name:"Gallery",
        path:"gallery",
        icon:<GalleryIcon/>
    }
]
const Account = () => {
    const[active_link,set_active_link] =useState('');
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(()=>{
      Api.get('posts')
          .then(data=>{
              // console.log(data,"posts");
              dispatch(set_posts(data));
          });
      const path = location.pathname;
      // console.log(path,"path");
      const a_link = path.split('/')[2];
      set_active_link(a_link);
    },[]);
    useEffect(()=>{
      const path = location.pathname;
      const a_link = path.split('/')[2];
      set_active_link(a_link);
    },[location.pathname]);
    useEffect(()=>{
    
        let url=`comments`;
        Api.get(url)
        .then(data=>{
            console.log(data,"data")
            if(data.err){
                alert("Error occurred")
                return
            }
            else if(data.length > 0){
                dispatch(set_comments(data))  

            }
            else{
                
            }
        })
         
      },[])
  return (
    <>
      <Header/>
      <Tail/>
      <Wrapper>
         <section>
            <Routes>
              <Route index element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/new" element={<NewBlog/>}/>
              <Route path="/gallery" element={<Gallery/>}/>
              <Route path="/blog/:id" element={<Blog/>}/>
            </Routes>
         </section>
      </Wrapper>
    </>
  )
}

export default Account
const Wrapper= Styled.main`
  position:fixed;
  overflow-y:auto;
  left:0;
  width:100%;
  top:61px;
  height:calc(100vh - 61px);
  display:flex;
 

  &>section{
      padding:20px;
      background-color:#fafafa;
      width:100%;
      overflow-y:auto;
      height:100%;
    }
`
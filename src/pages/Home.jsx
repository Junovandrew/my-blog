import React, { useEffect, useState } from 'react'
import Styled from 'styled-components'
import{Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import AuthorImg from '../assets/download2.jpg'
import {PiGithubLogoFill as BlogIcon} from 'react-icons/pi'
import { Button, Searchform } from '../components'

import { AddComment } from '../modal'

import Api from '../api'

const body = [
    'title',
    'body',
    'author',
    'date',
    'id',
    'time',
]
const Home = () => {
    const[search,set_search] = useState('');
    const {posts} = useSelector(store=>store.posts);
    const [filtered_posts,set_filtered_posts] = useState(posts);
    const[property,set_property] = useState('');
    const[order,set_order] = useState(-1);
    useEffect(()=>{
        set_filtered_posts(posts);
        console.log(posts,'posts')
    },[posts]);
 
    useEffect(()=>{
        if(!search){
            set_filtered_posts(posts);
        }
        else{
            const temp_search = search.toLowerCase();
            let temp_posts;
            if(temp_search ==='female' || temp_search==='male'){
                temp_posts=posts.filter(epost=>
                    epost.title.toLowerCase()===temp_search);
                }
            else if (!isNaN (temp_search)){
                temp_posts= posts.filter(epost=>
                    epost.level == temp_search);
            }
            else{
            temp_posts = posts.filter(epost=>
                Object.values(epost).join('').toLowerCase().includes(
                    search.toLowerCase()));
            // console.log(temp_posts,'temp_posts')            
        }
        set_filtered_posts(temp_posts)
        }
    },[search]);
    useEffect(()=>{
        if(filtered_posts.length > 0 && property ){
            const name = property.toLowerCase();
                let temp_order = order;
                if(order == -1)temp_order = 0;
                let result;
                if(!temp_order){
                    
                  result = [...filtered_posts].sort((a,b)=>{
                            if(a[name].toString().toLowerCase()<b[name].toString().toLowerCase())return -1;
                            if(a[name].toString().toLowerCase()>b[name].toString().toLowerCase())return 1;
                            return 0;
                        });
                    
                }
                else{
                  
                        result = [...filtered_posts].sort((a,b)=>{
                            if(a[name].toString().toLowerCase()<b[name].toString().toLowerCase())return 1;
                            if(a[name].toString().toLowerCase()>b[name].toString().toLowerCase())return -1;
                            return 0;
                        });
                    
                } 
                set_filtered_posts(result);   
        }else{

        }
        
    },[order,property]);
  return (
    <Wrapper>        
        <span>
            <input type="text" placeholder="search blog..." onChange={set_search}/>
        </span>
        <span>
            All blogs  
            <BlogIcon/>          
        </span>
        {/* <section>
            <div>
                <span>One piece!</span>
                <span>written by Andrew</span>
                <span>12/02/2022 12:22 pm</span>
               <Link to="../blog/1">               
                    <Button>Read more...</Button>                
                </Link> 
            </div>            
           <img src={OnepieceImg}/>           
        </section>
        <section>
            <div>
                <span>Naruto!</span>
                <span>written by Andrew</span>
                <span>12/02/2022 12:22 pm</span> 
                <Link to="../blog/2">               
                    <Button>Read more...</Button>                
                </Link>                   
            </div>
            <img src={AuthorImg}/>
        </section>
        <section>
            <div>
                <span>Bleach!</span>
                <span>written by Andrew</span>
                <span>12/02/2022 12:22 pm</span> 
                <Link to="../blog/3">               
                    <Button>Read more...</Button>                
                </Link>                   
            </div>
            <img src={BleachImg}/>
        </section>
        <section>
            <div>
                <span>Black Clover!</span>
                <span>written by Andrew</span>
                <span>12/02/2022 12:22 pm</span> 
                <Link to="../blog/4">               
                    <Button>Read more...</Button>                
                </Link>                   
            </div>
            <img src={BlackImg}/>
        </section>
        <section>
            <div>
                <span>Demon Slayer!</span>
                <span>written by Andrew</span>
                <span>12/02/2022 12:22 pm</span> 
                <Link to="../blog/5">               
                    <Button>Read more...</Button>                
                </Link>                   
            </div>
            <img src={DemonImg}/>
        </section>
        <section>
            <div>
                <span>Boku no Hero!</span>
                <span>written by Andrew</span>
                <span>12/02/2022 12:22 pm</span> 
                <Link to="../blog/6">               
                    <Button>Read more...</Button>                
                </Link>                   
            </div>
            <img src={BokuImg}/>
        </section> */}
        
                {
                    filtered_posts && filtered_posts.length > 0 ? filtered_posts.map(
                        (epost)=>
                        <div key={epost.id}>
                            <div>
                                <span>{epost.title}</span>
                                <span>{epost.author}</span>
                                <span>{epost.date} {epost.time}</span>
                               <Link to={`../blog/${epost.id}`}>               
                                <Button>Read more...</Button>                
                            </Link>
                            </div>
                             <img src={epost.image?`/images/${epost.image}`:''}/>
                                
                        </div>)
                    :<>NO POST</>
                }
        
    </Wrapper>
  )
}

export default Home
const Wrapper = Styled.section`
display:grid;
grid-template-rows :1fr;
gap:30px;
padding: 0 100px 100px 100px; 
&>span:nth-of-type(2){
    border:5px;
    font-family:Arial;
    font-size:24px;
    border-bottom:3px solid rgb(145, 5, 5);
    color:rgb(29, 114, 105);
}
&>div{
    padding:15px;
    border-radius:8px;
    box-shadow:0px 2px 5px 1px rgba(0,0,0,0.1);
    display:flex;
    flex-direction:row;
    gap:50px;
    text-decoration:none;
    background-color:rgb(42, 163, 151);
    justify-content:space-between;
    align-items:center;
    
    & > div{
        display:grid;
        grid-template-columns:1fr;
        gap:5px;
        padding:15px;
        background-color:rgb(42, 163, 151);      

        & > span:first-of-type{
            font-family:Arial;
            color:rgb(145, 5, 5);
            font-size:24px;
        }
        & > span:nth-of-type(2){
            margin-bottom:15px;
        }
        & > a{
            text-decoration:none;
        }
    }    
    & > img{
        width:100px;
        height:100px;
        object-fit:contain;
        }  
    }
`
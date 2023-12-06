import React, { useState,useRef,useEffect } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Api from '../api/index'
import { useParams } from 'react-router-dom';
import { add_post } from '../redux/reducers/postReducer'
import { useDispatch } from 'react-redux'
import{Link} from 'react-router-dom'

const NewBlog = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [blog_title,set_blog_title] = useState('');
    const [blog_body,set_blog_body] = useState('');
    const [blog_author,set_blog_author] = useState('');
    const [date,set_date] = useState('');
    const [time,set_time] = useState('');
    const [imgVal,set_imgVal] = useState("");
    const [imgSrc,set_imgSrc] = useState("");
    const imgRef= useRef();
    // const toBase64 = file => new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = () => resolve(reader.result);
    //     reader.onerror = reject;
    // });
    // const  convert =async (img) =>{
    //     let result  = await toBase64(img);
    //     console.log(result,'result');
    //     imgRef.current = result;
    // }
    
   
    const url= `posts`;
    const handleAddpost =(e)=>{
        e.preventDefault();
        const body={
            title:blog_title,
            body:blog_body,
            author:blog_author,
            image:imgSrc?imgSrc:'',
            date,
            time,
        }
        Api.post({url,body:JSON.stringify(body)})
        .then(data=>{
            console.log(data,"data");
            if(data.err){

            }
            else if(data.id){
                dispatch(add_post(data))
            }else{

            }
        })
    };
    const handleImg=(e)=>{
        const {value} = e.target;
        const images = value ?value.toString().split('\\'):[];
        set_imgSrc(images[2]);
        
        set_imgVal(value);
    }
  return (
    <Wrapper>
        <form onSubmit={handleAddpost}>
            <span>Add a new blog</span>
            <div>
                <img src={imgSrc?`/images/${imgSrc}`:''}  /><br/>
                <input value={imgVal} type="file" onChange={(e)=>handleImg(e)} /> 
            </div>
            <label>
                Blog title:
            </label>

            <input type='text' value={blog_title}
                   onChange={(e)=>set_blog_title(e.target.value)}/>
            <label>
                Blog body:
            </label>
            <input type='text' value={blog_author}
                   onChange={(e)=>set_blog_author(e.target.value)}/>
            <label>
                Blog author:
            </label>
            <input type='text' value={blog_body}
                   onChange={(e)=>set_blog_body(e.target.value)}/>
            <label>
                Date:
            </label>
            <input type='date' value={date}
                   onChange={(e)=>set_date(e.target.value)}/>
            <label>
                Time:
            </label>
            <input type='time' value={time}
                   onChange={(e)=>set_time(e.target.value)}/>
            <Button>
                Add Blog
            </Button>           
        </form>
    </Wrapper>
  )
}

export default NewBlog
const Wrapper = styled.div`
padding: 100px;
display: grid;
justify-content: center;
& > form{
    width: 450px;
    gap: 10px;
    display: grid;
    align-items: center;
    border: 1px solid red;
    background-color: rgb(77, 155, 147);
    margin: 30px auto;
    border-radius: 10px;
    padding:30px;
    
    & > div{
        & > img{
            width:100px;
            height:100px;
            object-fit:contain;
        }
    }

    & > label{
        text-align: center;
        margin-top: 0px;
        color: #302424;
        width: 100%;
        font-size: 20px;
    }
    & > input{
        font-size: 15px;
    }
    & > span{
            font-family:Arial;
            color:rgb(145, 5, 5);
            font-size:24px;
            text-align: center;
        }
}
`

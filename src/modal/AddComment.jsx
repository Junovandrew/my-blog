import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../components'
import Api from '../api/index'
import { add_comment } from '../redux/reducers/commentReducer'
import { useDispatch } from 'react-redux'

const AddComment = ({id}) => {
const [comments,set_comments] = useState('');
const dispatch = useDispatch();
const handleAddcomment =(e)=>{
    e.preventDefault();
    const body={
        comments,
        post_id:id,
    };
    if(!comments){
        alert("Fill the required field");
        return;
    };
    // if(!Api.check())return;
    const url= 'comments';
    Api.post({url,body:JSON.stringify(body)})
    .then(data=>{
        console.log(data,"data");
        if(data.err){

        }
        else if(data.id){
            alert("comment added successfullly");
            dispatch(add_comment(data))
        }else{

        }
    })
};
  return (
    <Wrapper>
        <form onSubmit={handleAddcomment}>
            
                <label>Comment Details</label>
               
                    <label>Comment: </label>
                    <input type='text' placeholder='comment' value={comments}
                   onChange={(e)=>set_comments(e.target.value)}/>                
                    <Button>
                        Submit
                    </Button>
               
        </form>
        
    </Wrapper>
  )
}

export default AddComment
const Wrapper = styled.div`
 width: 100%;
    margin: 30px auto;
    border: 1px solid red;
    background-color: #3e4f55;
    color: white;
    padding: 20px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
    &>form{
        width: 350px;
        gap: 10px;
        display: grid;
        /* justify-content: center; */
        align-items: center;
        & > label:first-child{
            font-size: 20px;
            color: white;
        };
        & > label{
            text-align: center;
            margin-top: 0px;
            color: rgb(0,0,0);
            width: 100%;
        };
        &.trash{
            right: 0;
            color: white;
        };
        &>div{
            display: flex;
            justify-content: center;
        }
    }`
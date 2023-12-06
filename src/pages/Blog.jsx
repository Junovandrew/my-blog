import React, { useEffect, useState ,useMemo} from 'react';
import { useParams } from 'react-router-dom';
import Api from '../api';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { set_comments } from '../redux/reducers/commentReducer'
import {useModal} from '../hooks/useModal'
import { AddComment } from '../modal'
import Button from '../components/Button'
import {FaCommentDots as CommentIcon} from 'react-icons/fa';


const Blog = () => {
    const {id} = useParams();
    const [body,set_body] = useState("");
    const dispatch = useDispatch();
    const {handleShowModal,set_modal_content} = useModal();
    const {comments} = useSelector(store=>store.comments);
    const post_comments = useMemo(()=>{
      return comments && comments.length > 0 ?comments.filter(eComment => eComment.post_id == id): [];
    },[comments])

    const addComment=()=>{
        set_modal_content(<AddComment id={id}/>)
        handleShowModal(true);
    };
  useEffect(()=>{
    console.log(id,"id");
    if(id){
      let url=`posts?id=${id}`;
      Api.get(url)
      .then(data=>{
        console.log(data,"data")
          if(data.err){
              alert("Error occurred")
              return
          }
          else if(data.length > 0){
              set_body(data[0].body)              
          }
          else{
              
          }
      })
    }
  },[])  
  

 
  return (
    <Wrapper>
        <div>{body}</div>

        <Button bg="red" onClick={addComment}>
            Comments
            <CommentIcon/>
        </Button>

        <div>
          <span>Comments:</span>
            <ul>  
              {post_comments && post_comments.length > 0 && post_comments.map(eComment => 
              <li key={eComment.id}>{eComment.comments}</li>)}
            </ul>
          </div>
    </Wrapper>
  )
}

export default Blog
const Wrapper = styled.div`

  &>div{
    padding: 50px;
    color:rgb(145, 5, 5);
    background-color: turquoise;
    font-size:24px;
    font-family:Arial, Helvetica, sans-serif;
    margin-bottom: 15px;
  }
`
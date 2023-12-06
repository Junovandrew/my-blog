import {createSlice} from '@reduxjs/toolkit'




export const commentReducer = createSlice({
    name:'comments',
    initialState:{comments:[]},
    reducers:{
        set_comments:(state,action)=>{
            return {comments:action.payload};
        },
        add_comment:(state,action) => {
            return{
                comments:[action.payload,...state.comments]
            }
        }
    }
});

export default commentReducer.reducer;
export const {set_comments,add_comment} = commentReducer.actions;
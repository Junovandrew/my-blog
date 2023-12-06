import {createSlice} from '@reduxjs/toolkit'




export const postReducer = createSlice({
    name:'posts',
    initialState:{posts:[]},
    reducers:{
        set_posts:(state,action)=>{
            return {posts:action.payload};
        },
        add_post:(state,action) => {
            return{
                posts:[action.payload,...state.posts]
            }
        }
    }
});

export default postReducer.reducer;
export const {set_posts,add_post} = postReducer.actions;
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";
import commentReducer from "./reducers/commentReducer";

export default configureStore({
     reducer:{
         posts:postReducer,
         comments:commentReducer,
   }
})
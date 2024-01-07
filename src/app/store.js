import { configureStore } from '@reduxjs/toolkit'

// import post reducer
import postsReducer from '../features/post/postsSlice'
import usersSlice from '../features/users/UsersSlice'

export default configureStore({
  reducer: {
    //post reducer
    posts: postsReducer,
    // user reducer
    users: usersSlice
  }
})

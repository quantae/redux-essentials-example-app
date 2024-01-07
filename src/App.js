import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { PostList } from './features/post/PostList'
import AddPostForm from './features/post/AddPostForm'
import SinglePostPage from './features/post/SinglePostPage'
import EditPostForm from './features/post/EditPostForm'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route
        path="/"
        element={
          <>
            <AddPostForm />
            <PostList />
          </>
        }
      />
      <Route path="/posts/:postId" element={<SinglePostPage />} />
      <Route path='/editPost/:postId' element={<EditPostForm />} />
    </Route>
  )
)
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App

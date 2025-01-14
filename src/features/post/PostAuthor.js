import React from 'react'
import { useSelector } from 'react-redux'

const PostAuthor = ({userId}) => {
    const author = useSelector(state => state.users.find(user => user.id === userId))

  return (
    <div>
      <span> by {author ? author.name : 'Unknown auther'}</span>
    </div>
  )
}

export default PostAuthor

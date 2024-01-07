import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

const SinglePostPage = () => {
  const { postId } = useParams()

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  console.log('single Post', post)

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <div
          style={{ display: 'flex', justifyContent: 'flex-start', gap: '2rem' }}
        >
          <PostAuthor userId={post.user} />
          <TimeAgo timeStamp={post.date} />
        </div>

        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${postId}`}>Edit Post</Link>
      </article>
    </section>
  )
}

export default SinglePostPage

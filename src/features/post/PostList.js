import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

export const PostList = () => {
   // this accesses the posts state in the Redux store
   // using useSelector
    const posts = useSelector(state => state.posts)

    // Sorting the posts according to time it was added
    const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))


    const renderedPosts = orderPosts.map( post => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <div style={{display: "flex", justifyContent:"flex-start", gap:'2rem'}}> 
            <PostAuthor userId={post.user} />
            <TimeAgo timeStamp={post.date} />
            
        </div>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <ReactionButtons post={post}/>
            <Link to={`/posts/${post.id}`} className='button muted-button'>View Post</Link>
        </article>
    ))

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
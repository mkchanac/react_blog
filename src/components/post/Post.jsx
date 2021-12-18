import "./post.css";

const Post = (prop) => {
    return ( 
    <div className="post">
        <img className="postImg" src="https://picsum.photos/200" alt=""></img>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem, ipsum dolor sit</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam ex recusandae enim vitae sunt in explicabo, placeat numquam. Esse, porro debitis nostrum sint libero accusantium maxime est ullam obcaecati.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam ex recusandae enim vitae sunt in explicabo, placeat numquam. Esse, porro debitis nostrum sint libero accusantium maxime est ullam obcaecati.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam ex recusandae enim vitae sunt in explicabo, placeat numquam. Esse, porro debitis nostrum sint libero accusantium maxime est ullam obcaecati.</p>

    </div> );
}
 
export default Post;
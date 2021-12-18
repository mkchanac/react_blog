import "./singlepost.css";

const SinglePost = (prop) => {
    return ( 
    <div className="singlepost">
        <div className="singlePostWrapper">
            <img src="https://www.vmcdn.ca/f/files/via/images/weather/snow-dec-6-2021-metro-vancouver-bc.jpg;w=960" alt="" className="singlePostImg"/>
            <h1 className="singlePostTitle">Lorem ipsum dolor
            <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Safak</b>
                </span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, explicabo commodi! Ut culpa mollitia in quibusdam! Aliquid similique deserunt nisi laboriosam numquam ut eius magni tempora. Molestiae iste eligendi quasi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam est velit quidem dolor suscipit vero temporibus vitae itaque, laborum nisi repudiandae id deleniti aspernatur voluptas molestiae repellendus ducimus reiciendis atque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae maiores recusandae quos eos cupiditate beatae ex nostrum placeat! Alias beatae consectetur unde excepturi quis minima impedit, ipsum aliquid rerum magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolorem impedit quisquam iste odit maxime, enim suscipit quibusdam tempore aperiam assumenda velit! Vero vel quidem maiores saepe laboriosam consectetur voluptate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sint nemo alias natus velit tenetur, perspiciatis soluta non voluptates minima voluptatem qui impedit rerum consequatur nostrum dignissimos facilis? Eum, aliquam!</p>
        </div>

    </div> );
}
 
export default SinglePost;
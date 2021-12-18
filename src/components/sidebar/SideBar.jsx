import "./sidebar.css";

const SideBar = (props) => {
    return ( <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span><br/>
            <img src="https://picsum.photos/200" alt=""></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laboriosam consequuntur dignissimos in</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span><br/>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span><br/>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i> 
            </div>
        </div>
    </div> );
}
 
export default SideBar;
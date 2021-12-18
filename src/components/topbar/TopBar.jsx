import React from 'react';
import "./topbar.css";
import { Link } from 'react-router-dom';

const TopBar = () => {
    const user = true;
    return (<div className="top">
        <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className='link' to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link>
                </li>
                <li className="topListItem">                    
                    <Link className='link' to="/" style={{textDecoration:"none", color:"inherit"}}>ABOUT</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to="/" style={{textDecoration:"none", color:"inherit"}}>CONTACT</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to="/write" style={{textDecoration:"none", color:"inherit"}}>WRITE</Link>
                </li>
                <li className="topListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? 
                (
                <img className="topImg" src="https://picsum.photos/200" alt=""></img>
                ) : (
                    <ul className="topList">
                        <li className='topListItem'>
                            <Link className='link' to="/login">LOGIN</Link>
                        </li>
                        <li className='topListItem'>
                            <Link className='link' to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )
            }

            <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>  );
}
 
export default TopBar;
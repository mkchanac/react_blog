import './header.css';

const Header = (props) => {
    return ( <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://www.vmcdn.ca/f/files/via/images/weather/snow-dec-6-2021-metro-vancouver-bc.jpg;w=960" alt=""></img>
    </div> );
}
 
export default Header;
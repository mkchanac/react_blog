import React from 'react';
import "./setting.css";
import SideBar from "../../components/sidebar/SideBar";

const Setting = () => {
    return ( 
        <div className='setting'>
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img src="https://www.vmcdn.ca/f/files/via/images/weather/snow-dec-6-2021-metro-vancouver-bc.jpg;w=960" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Safak' />
                    <label>Email</label>
                    <input type="email" placeholder='safak@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className='settingSubmit'>Update</button>
                </form>
            </div>
            <SideBar />
        </div>
     );
}
 
export default Setting;
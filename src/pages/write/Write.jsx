import React from 'react';
import "./write.css";

const Write = () => {
    return ( 
    <div className='write'>
        <img className='writeImg' src='https://www.vmcdn.ca/f/files/via/images/weather/snow-dec-6-2021-metro-vancouver-bc.jpg;w=960' alt=''></img>
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none" }} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' type="text" className="writeInput writeText"  ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div> 
    );
}
 
export default Write;
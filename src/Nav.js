import React, { useState, useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
const navigate =useNavigate();
const location = useLocation();
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
     window.addEventListener("scroll",transitionNavBar);
     return () => window.removeEventListener('scroll',transitionNavBar)
    },[]);
    

    return <div className={`nav ${show && 'nav_black'}`}>
        <div className='nav_contents'>

            <img className='nav_logo' onClick={()=>{if(location.pathname !=='/'){navigate('/');}}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt='' />

            <img className='nav_avatar' onClick={()=>{if(location.pathname !=='/profile'){navigate('profile');}}} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        </div>
    </div>;
}

export default Nav;

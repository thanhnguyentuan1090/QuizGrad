import React from 'react'
import { Outlet } from 'react-router-dom';
import "./TopNav.css"
import {Link} from 'react-router-dom';

export default function TopNav() {
  return (
    // <div className='TopNav'>
    //     <div className='LogoQUiz'>QuizGrad</div>
    //     <div className='How'>How it work ?</div>
    //     <div className='Fea'>Features</div>
    //     <div className='About'>About Us</div>
    //     <div className='Login'>Login</div>

    // </div>
    <>
    <div className="topbar">
      <div className="lefttopbar">
          <Link to="/home" className='navLink'><div className="Quizgrad"><span>Quiz</span><span className='Grad'>Grad</span> </div></Link>
          </div>
      <div className="righttopbar">
      <div className="topbtn">How it work ? </div>
        <div className="topbtn">features</div>
        <div className="topbtn">About us</div>
        <Link className='navLink' to="/login"><div className="topbtn sign">Login</div></Link>
    </div>
    </div>
    <Outlet></Outlet>
    </>
  );
  
}

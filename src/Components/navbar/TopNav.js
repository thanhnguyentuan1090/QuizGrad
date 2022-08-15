import React from 'react'
import "./TopNav.css"

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
          <div className="Quizgrad"><span>Quiz</span><span className='Grad'>Grad</span> </div>
          </div>
      <div className="righttopbar">
      <div className="topbtn">How it work ? </div>
        <div className="topbtn">features</div>
        <div className="topbtn">About us</div>
        <div className="topbtn sign">Sign Up</div>
    </div>
    </div>
    </>
  );
  
}

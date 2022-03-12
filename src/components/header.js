
import '../css/style.css';
import React, { Component, useEffect, useState, useCallback } from 'react';
import { Route, NavLink } from 'react-router-dom';
import icon_profile from '../asset/profile.svg'
import TechAnimation from '../animations/techAnimation'

const Header = () => {
    const [isShrunk, setShrunk] = useState(false);
  
    // useEffect(() => {
    //   const handler = () => {
    //     setShrunk((isShrunk) => {
    //       if (
    //         !isShrunk &&
    //         (document.body.scrollTop > 20 ||
    //           document.documentElement.scrollTop > 20)
    //       ) {
    //         return true;
    //       }
  
    //       if (
    //         isShrunk &&
    //         document.body.scrollTop < 4 &&
    //         document.documentElement.scrollTop < 4
    //       ) {
    //         return false;
    //       }
  
    //       return isShrunk;
    //     });
    //   };
  
    //   // Previous logic.
    // }, []);
  
    return (
        <div className="header">
            {/*<!-- 헤더  -->*/}
            <header id="header-container" className="main-header">
                <div className="container">

                    {/*<!-- logo -->*/}
                    <div className="main-logo">
                        <a href="/home" alt="DCC Home">
                            <img src={icon_profile}></img>
                            <h1 id="typing" className="small">jnpark</h1>
                            <h1 className="long">zzz</h1>
                            <div id="crow">|</div>
                            <TechAnimation/>
                        </a>
                    </div>
                    {/*<!--메인 메뉴 영역 -->*/}
                    {/* <nav className="main-menu">
                        <ul>
                            <li >
                                <NavLink to="/home/profile" activeClassName="active">
                                    <img className="icon-profile" src={icon_profile}></img>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/home/profile" activeClassName="active">
                                    <img className="icon-profile" src={icon_profile}></img>
                                </NavLink>
                            </li>
                            
                        </ul>
                        
                    </nav> */}
                </div>
            </header >
        </div >
    );
  };
  export default Header;
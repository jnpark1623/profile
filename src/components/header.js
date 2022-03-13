
import '../css/style.css';
import React, { Component, useEffect, useState, useCallback } from 'react';
import { Route, NavLink } from 'react-router-dom';
import icon_profile from '../asset/profile.svg'
import icon_awards from '../asset/awards.svg'
import myimg from '../asset/myimg.jpg';
import TechAnimation from '../animations/techAnimation'
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();
    const [isShrunk, setShrunk] = useState(false);
  
    useEffect(() => {
      const handler = () => {
        setShrunk((isShrunk) => {
          if (
            !isShrunk &&
            (document.body.scrollTop > 20 ||
              document.documentElement.scrollTop > 20)
          ) {
            return true;
          }
  
          if (
            isShrunk &&
            document.body.scrollTop < 4 &&
            document.documentElement.scrollTop < 4
          ) {
            return false;
          }
  
          return isShrunk;
        });
      };
  
      // Previous logic.
    }, []);
  
    return (
      <div>
            <header className="main-header">
                {/*<!-- logo -->*/}
                
                <div className="main-logo">
                  <NavLink to="/home">
                      <img src={myimg} className="profileimg"></img>
                  </NavLink>
                </div>
                
                <div className='title'>
                  <NavLink to="/home">
                    <div className='main-logo'>
                        <h1 className="small">{t('title')}</h1>
                        <h1 className="long">{t('stitle')}</h1>
                    </div>
                    <div className='subtitle headline'>
                        <p className="small" style={{ verticalAlign: 'top' }}>
                            {t('subtitle')}
                        </p>
                    </div>
                  </NavLink>
                </div>
                
                {/* <!--메인 메뉴 영역 -->*/} 
                <nav class="util-menu">
                  <ul>
                      <li>
                          <NavLink to="/profile">
                            <img className="icon_menu" src={icon_profile}></img>
                          </NavLink>
                          {/* <NavLink to="/awards">
                            <img className="icon_menu" src={icon_awards}></img>
                          </NavLink> */}
                      </li>
                    </ul>
                </nav>
            </header >
      </div>
    );
  };
  export default Header;
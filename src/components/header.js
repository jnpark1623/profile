
import '../css/style.css';
import React, { Component, useEffect, useState, useCallback } from 'react';
import { Route, NavLink, useLocation } from 'react-router-dom';
import icon_profile from '../asset/profile.svg'
import icon_awards from '../asset/awards.svg'
import icon_language from '../asset/language.svg'
import myimg from '../asset/myimg.jpg';
import TechAnimation from '../animations/techAnimation'
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [language, setLanguage] = useState("ko-kr");

    useEffect(() => {
      i18n.changeLanguage(language);
    }, [language]);

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
                <nav className="main-menu">
                  <ul>
                      <li>
                          <div className="icon_language" ></div>
                          <ul>
                            <li>
                              <a onClick={() => setLanguage("ko-kr")} className={language =="ko-kr" ? "active" : ""}>
                                {t('ko-kr')}
                              </a>
                              <a onClick={() => setLanguage("en-us")} className={language =="en-us" ? "active" : ""}>
                                {t('en-us')}
                              </a>
                            </li>
                          </ul>
                      </li>
                      <li className={location.pathname =="/profile" ? "active" : ""}>
                        <NavLink to="/profile">
                          <div className={location.pathname =="/profile" ? "icon_menu active" : "icon_menu"}></div>
                        </NavLink>
                      </li>
                        
                  </ul>
                </nav>
            </header >
      </div>
    );
  };
  export default Header;
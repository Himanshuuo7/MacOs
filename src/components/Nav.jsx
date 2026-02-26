import React from 'react';
import "./nav.scss"
import DateTime from './DateTime';

const Nav = () => {
  return (
    <nav>
        <div className="left">
            <div className="apple-icon">
                <img src="./nav-bar-icon/apple.svg" alt="" />
            </div>

            <div className="nav-item">
                <p>Himanshu Sonkusre</p>
            </div>
            <div className="nav-item">
                <p>File</p>
            </div>
            <div className="nav-item">
                <p>Window</p>
            </div>
            <div className="nav-item">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="nav-icon">
                <img src="./nav-bar-icon/wifi.svg" alt="" />
            </div>
            <div className="nav-icon">
                <DateTime/>
            </div>
        </div>
    </nav>
  );
}

export default Nav;

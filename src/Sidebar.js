import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2078&q=80" alt="" />
            <Avatar className="sidebar__avatar" />
            <h2>Aaryaman Sharma</h2>
            <h4>Aaryaman.sharma001@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">
                    1298
                </p>
            </div>
            <div className="sidebar__stat">
                <p>Impression of your post</p>
                <p className="sidebar__statNumber">
                    1874
                </p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
        </div>

    </div>
  );
}

export default Sidebar;

import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
        <div clasName="sidebar__top">
            <img src="" alt="" />
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
    </div>
  );
}

export default Sidebar;

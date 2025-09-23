import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ThreeDotMenu.scss'; 
import { setKebabMenuBoxState } from '../store/dashboardSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const ThreeDotMenu = () => {
  const dispatch = useDispatch();
  const threeDotMenuRef = useRef(null);
  const { isKebabMenuBoxOpen } = useSelector((state) => state.dashboard);

  useEffect(() => {
    function handleClickOutside(event) {
        if(threeDotMenuRef.current && !threeDotMenuRef.current.contains(event.target)) {
            dispatch(setKebabMenuBoxState(false));
        }
    }
    if(isKebabMenuBoxOpen) {
        document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isKebabMenuBoxOpen]);

  const handleKebabIconClick = () => {
    if(!isKebabMenuBoxOpen) {
        dispatch(setKebabMenuBoxState(true));
    }
  }

  return (
    <div className="menu-container">
        {/* Three dots button */}
        <button onClick={handleKebabIconClick} className="toolbar-button icon-only-button">
            <FontAwesomeIcon icon={faEllipsisV} className="icon" />
        </button>

        {/* Menu box */}
        {isKebabMenuBoxOpen && 
            <div ref={threeDotMenuRef} className="menu-box" onClick={(e) => e.stopPropagation()}>
                <Link to="/portfolio" onClick={()=>{dispatch(setKebabMenuBoxState(false))}} className="menu-item">Portfolio</Link>
                <Link to="/blogs" onClick={()=>{dispatch(setKebabMenuBoxState(false))}} className="menu-item">Blogs</Link>
                <Link to="/tips" onClick={()=>{dispatch(setKebabMenuBoxState(false))}} className="menu-item">Tips</Link>
            </div>
        }
    </div>
  );
};

export default ThreeDotMenu;

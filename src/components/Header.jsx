import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedOption } from "../store/dashboardSlice";
import "./Header.scss";
import { Link } from "react-router-dom";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function Header({ onSearch, pageName }) {
    const [query, setQuery] = useState("");
    const [scrolled, setScrolled] = useState(false);
    
    const dispatch = useDispatch();
    const selectedOption = useSelector((state) => state.dashboard.selectedOption);
    const { isModalOpen } = useSelector((state) => state.dashboard);

    const handleChange = (e) => {
        dispatch(setSelectedOption(e.target.value));
    };

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 6);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const clear = () => {
        setQuery("");
        onSearch?.("");
    };

    return (
        !isModalOpen && <header className={`app-header ${scrolled ? "scrolled" : ""}`}>
            <div className="header-left">
                {/* <span className="status-dot" aria-hidden="true" /> */}
                <Link to="/" className={`sticky-bar-home ${location.pathname === '/' ? 'home-active' : 'not-home'}`}>Home</Link>
                {/* <svg className="from-home-to" viewBox="0 0 24 24" width="18" height="18" aria hidden>
                    <path d="M9 18l6-6-6-6" ill="none" stroke="currentColor"/>
                </svg> */}
                {pageName !== "Home" ? (<>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="greater-than-symbol"
                    >
                        <path d="M6 4l4 4-4 4" />
                    </svg>
                    <div className="brand">{pageName}</div>
                </>) : null}
            </div>

            {/* centered search - absolutely centered so it stays visually centered */}
            <div className="search-centered" aria-hidden="false">
                <div className="search-wrap" role="search">
                    <svg className="icon search" viewBox="0 0 24 24" width="18" height="18" aria hidden>
                        <path
                            d="M21 21l-4.35-4.35m1.44-5.4a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                            fill="none"
                            stroke="currentColor"
                        />
                    </svg>

                    <input
                        className="search-input"
                        placeholder="Search anything..."
                        value={query}
                        onChange={(e) => { 
                            setQuery(e.target.value); 
                            onSearch?.(e.target.value);
                        }}
                        aria-label="Search"
                    />

                    {query && (
                        <button className="btn-clear" onClick={clear} aria-label="Clear Search">X</button>
                    )}
                </div>
            </div>

            <div className="header-right">
                <div className="icon-btn dropdown-box">
                    <select
                     className="dropdown-select"
                     value={selectedOption}
                     onChange={handleChange}
                    >
                        <option value="Normal Mode">Normal Mode</option>
                        <option value="Advanced Mode">Advanced Mode</option>
                    </select>
                </div>

                <button className="icon-btn">
                    {/* <svg className="notification-bell" viewBox="0 0 24 24" width="18" height="18" aria hidden>
                        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" fill="currentColor" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" fill="currentColor" />
                        <path d="M4 5c-1 1.5-1 3 0 4.5" fill="currentColor" />
                        <path d="M20 5c1 1.5 1 3 0 4.5" fill="currentColor" />
                    </svg> */}
                    <NotificationsActiveIcon sx={{ color: "#616263", width: "20px", height: "20px" }}/>
                </button>


                <div className="profile-pill" title="Profile">
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden style={{marginRight: 8, color: "#616263"}}>
                        <circle cx="12" cy="8" r="3" fill="currentColor" />
                        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" fill="currentColor"/> 
                    </svg>
                    TR
                </div>
            </div>
        </header>
    );
}
import React, { useState } from "react";
import {Link, NavLink,useNavigate } from "react-router-dom";
import search from '../../assets/search.png';
import panel from '../../assets/panel.png';

import "./navbar.css";

const Navbar=()=> {

  localStorage.clear();
	const user=localStorage.getItem('profile');
	
	return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink  to="/" className="nav-logo">
            FUNDOTED
            <i className="fas fa-code"></i>
          </NavLink>

{/*
		  	<div className="searchMenu">
			<input type="text" width={100} />
            <img src={search} alt="" className="searchIcon" />
			</div>
	*/}		

          <ul className="nav-menu active" >

			<li className="nav-item">
              <NavLink to="/" className="nav-links" >
                Home
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink to="/discover" className="nav-links" >
                Discover
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink to="/blog" className="nav-links">
                Contact
              </NavLink>
            </li>

          {user?
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-links">
                Dashboard
              </NavLink>
            </li>:
            <li className="nav-item">
              <NavLink to="/login" className="nav-links">
                Login
              </NavLink>
            </li>
          }


          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
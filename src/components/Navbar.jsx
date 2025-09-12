
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/navbar.css';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	const handleHamburger = () => setMenuOpen((prev) => !prev);
	const closeMenu = () => setMenuOpen(false);

	return (
		<nav className="navbar">
			<div className="navbar-logo">
				Alt I Høyde Praksis 2025
			</div>
			<div className={`navbar-links${menuOpen ? ' open' : ''}`}> 
			   <Link to="/" className="navbar-link" onClick={closeMenu} style={{fontWeight: location.pathname === '/' ? 'bold' : 500}}>Hjem</Link>
			   <Link to="/omoss" className="navbar-link" onClick={closeMenu} style={{fontWeight: location.pathname === '/omoss' ? 'bold' : 500}}>Om oss</Link>
			   <Link to="/prosjektlogg" className="navbar-link" onClick={closeMenu} style={{fontWeight: location.pathname === '/prosjektlogg' ? 'bold' : 500}}>Prosjektlogg</Link>
			   <Link to="/status1" className="navbar-link" onClick={closeMenu} style={{fontWeight: location.pathname === '/status1' ? 'bold' : 500}}>Status 1</Link>
			   <Link to="/status2" className="navbar-link" onClick={closeMenu} style={{fontWeight: location.pathname === '/status2' ? 'bold' : 500}}>Status 2</Link>
		   </div>
			   <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={handleHamburger} aria-label="Toggle menu" tabIndex={0} role="button">
				   <span></span>
				   <span></span>
				   <span></span>
			   </div>
		   </nav>
	);
};

export default Navbar;

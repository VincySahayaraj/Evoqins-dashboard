// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./navbarelements";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './navbar.css';
import { FaHome } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";


const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />
				{/* <Container> */}
				<NavMenu className="head">
					<NavLink to="/" className='navlink' >
						<FaHome />
						<span className="nav-names">
							Dashboard
						</span>
					</NavLink>
					<NavLink to="domains" className='navlink' activeStyle>
						<FaGlobe />
						<span className="nav-names">
							Manage Domains
						</span>
					</NavLink>
					<NavLink to="/" className='navlink' activeStyle>
						<FaChartBar /><span className="nav-names">
							Reports
						</span>
					</NavLink>
					<NavLink to="domains" className='navlink' activeStyle>
						<FaPeopleArrows />
						<span className="nav-names">
							Social Media Accounts
						</span>
					</NavLink>
					<NavLink to="/" className='navlink' activeStyle>
						<FaDesktop />
						<span className="nav-names">
							Templates
						</span>
					</NavLink>
					<NavLink to="domains" className='navlink'>
						<FaTicketAlt />
						<span className="nav-names">
							Coupons
						</span>
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				{/* </Container> */}
				{/* <NavBtn>
					<NavBtnLink to="/signin">
						Sign In
					</NavBtnLink>
				</NavBtn> */}
			</Nav>
		</>
	);
};

export default Navbar;


import React, { useState } from 'react';
import { FaBell } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Avatar from 'react-avatar';
import { Form, Button,Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/logo-header.PNG';
import './header.css';

const Header = () => {

    const [searchInput, setSearchInput] = useState("");
    const handleSearch = (event) => {
        event.preventDefault();
    };

    return (
        <>
         <Container>
            <div className="d-flex header-total">
                <div className='col-xl-1 col-lg-1 col-sm-4 col-xs-4'><img src={logo} /></div>
                <div className='col-xl-1 col-lg-1 col-sm-4 col-xs-4'></div>
                <div className='col-xl-5 col-lg-5 col-sm-4 col-xs-4'>
                    <Form onSubmit={handleSearch} className='d-flex'>
                        <Form.Group controlId="searchInput" className='search-form'>
                            <Form.Control type="text" placeholder="Search for domains" className='input-search' />
                        </Form.Group>
                        <Button className='search-btn' type="submit">
                            <FaSearch />
                        </Button>
                    </Form>
                </div>
                <div className='d-flex col-xl-5 col-lg-5 col-sm-4 col-xs-4 cart-section'>
                    <div className='icon-header'>
                        <FaBell className='bigger-icon' />
                    </div>
                    <div className='profile-icon'>
                        <Avatar round name="Wim Mostmans" size="50" textSizeRatio={1.75} />
                        <select className='name-selection'>
                            <option value="name" selected>Maria</option>
                            <option value="logout">LogOut</option>
                        </select>
                    </div>
                    <div  className='icon-header'>
                        <FaCartPlus className='bigger-icon' />
                    </div>
                </div>
            </div>
            </Container>
        </>
    )
};
export default Header;
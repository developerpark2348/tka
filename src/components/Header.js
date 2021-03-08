import React from 'react';
import './Style.css';
import { Navbar, Nav } from 'react-bootstrap';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Header() {
    return (
        <div id="Header_Body">
            <Navbar id="Header_Navbar">
                <Navbar.Brand id="Header_Navbar_Main" href="#/">
                    <FontAwesomeIcon id="Header_Navbar_Main_Icon"
                    icon={faCertificate} 
                    />
                </Navbar.Brand>
                <Nav.Link id="Header_Navbar_Mail" href="#pricing">
                    의견 보내기
                </Nav.Link>
                <Nav.Link id="Header_Navbar_Alltest" href="#features">
                    테스트 전체보기
                </Nav.Link>
                <Nav.Link id="Header_Navbar_Login" href="#Login">
                    로그인
                </Nav.Link>
            </Navbar>
        </div>
    );
}

export default Header;
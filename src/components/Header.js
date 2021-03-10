import React from 'react';
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
                <Nav.Link id="Header_Navbar_Mail" href="#Mail">
                    <div className="Header_Navbar_text">의견 보내기</div>
                </Nav.Link>
                <Nav.Link id="Header_Navbar_Alltest" href="#Alltest">
                    <div className="Header_Navbar_text">테스트 전체보기</div>
                </Nav.Link>
                <Nav.Link id="Header_Navbar_Login" href="#Login">
                    <div className="Header_Navbar_text">로그인</div>
                </Nav.Link>
            </Navbar>
        </div>
    );
}

export default Header;
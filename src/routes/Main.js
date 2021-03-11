import React from 'react';
import Lank from '../components/Lank';
import { Link } from 'react-router-dom';

function Main({ history }) {
    return (
        <div id="Main_body">
            <div id="Main_Notice">
                <div id="Main_Notice_Main">
                    서버 점검이 2시 ~ 3시 진행됩니다.
                </div>
                <div id="Main_Notice_Sub">
                    <ul className="Main_Notice_Sub_List">
                        <Link to="/Notice/1" style={{ textDecoration: 'none', color: 'black', marginLeft: '0.5vw'}}>공지에 대한 예시로서 긴 공지</Link>
                    </ul>
                    <ul className="Main_Notice_Sub_List">
                        <Link to="/Notice/2" style={{ textDecoration: 'none', color: 'black', marginLeft: '0.5vw'}}>공지에 대한 예시로서 긴 공지</Link>
                    </ul>
                    <ul className="Main_Notice_Sub_List">
                        <Link to="/Notice/3" style={{ textDecoration: 'none', color: 'black', marginLeft: '0.5vw'}}>공지에 대한 예시로서 긴 공지</Link>
                    </ul>
                    <ul className="Main_Notice_Sub_List">
                        <Link to="/Notice/4" style={{ textDecoration: 'none', color: 'black', marginLeft: '0.5vw'}}>공지에 대한 예시로서 긴 공지</Link>
                    </ul>
                </div>
                {/* 클릭시 해당 공지로 연결하도록 */}
            </div>
            <div id="Main_Bottom">
                <div id="Main_Lank">
                    <Lank />
                </div>
                <div id="Main_Advertise">
                    광고구역
                </div>
            </div>
        </div>
    );
}

export default Main;
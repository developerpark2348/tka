import React from 'react';
import Lank from '../components/Lank';

function Login() {

    return (
        <div id="Login_body">
            <div id="Login_login">
                <button className="Login_Btn">트위터 로그인</button>
                <button className="Login_Btn">카카오톡 로그인</button>
            </div>
            <div id="Login_Bottom">
                <div id="Login_Lank">
                    <Lank/>
                </div>
                <div id="Login_Ad">
                    광고구역
                </div>
            </div>
        </div>
    );
}

export default Login;
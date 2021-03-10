import React from 'react';
import './Style.css';
import Main from '../routes/Main';
import Mail from '../routes/Mail';
import Login from '../routes/Login';
import Alltest from '../routes/Alltest';
import Footer from './Footer';
import Header from './Header';
import {HashRouter as Router, Route} from 'react-router-dom';

function AppRouter(){

    return(
        <Router>
            <Header/>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route exact path="/Mail">
                    <Mail/>
                </Route>
                <Route exact path="/Login">
                    <Login/>
                </Route>
                <Route exact path="/Alltest">
                    <Alltest/>
                </Route>
            <Footer />
        </Router>
    )
}

export default AppRouter;
import React from 'react';
import './Style.css';
import Main from '../routes/Main';
import Mail from '../routes/Mail';
import Login from '../routes/Login';
import Alltest from '../routes/Alltest';
import Notice_1 from '../routes/Notice_1'
import Notice_2 from '../routes/Notice_2'
import Notice_3 from '../routes/Notice_3'
import Notice_4 from '../routes/Notice_4'
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
                <Route exact path="/Notice/1">
                    <Notice_1/>
                </Route>
                <Route exact path="/Notice/2">
                    <Notice_2/>
                </Route>
                <Route exact path="/Notice/3">
                    <Notice_3/>
                </Route>
                <Route exact path="/Notice/4">
                    <Notice_4/>
                </Route>
            <Footer />
        </Router>
    )
}

export default AppRouter;
import React from 'react';
import Main from '../routes/Main';
import Mail from '../routes/Mail';
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
            <Footer/>
        </Router>
    )
}

export default AppRouter;
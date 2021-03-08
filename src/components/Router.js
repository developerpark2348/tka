import React from 'react';
import Main from '../routes/Main';
import {HashRouter as Router, Route} from 'react-router-dom';

function AppRouter(){

    return(
        <Router>
            <Route exact path="/">
                <Main />
            </Route>
        </Router>
    )
}

export default AppRouter;
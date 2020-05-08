import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import HomeLayout from './Containers/HomeLayout/HomeLayout';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* Currently single page, more routes can be added in future to expand application*/}
                <Route exact path="/" component={HomeLayout} />
            </Switch>
        </BrowserRouter>
    );
};

export default MainRouter;
import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import HomeLayout from './Containers/HomeLayout/HomeLayout';
import OverView from './Containers/MarketOverview/Overview';
import LiquidityAnalysis from './Containers/LiquidityAnalysis/LiquidityAnalysis';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeLayout} />
                <Route exact path="/LiquidityAnalysis"
                    component={LiquidityAnalysis} />
            </Switch>
        </BrowserRouter>
    );
};

export default MainRouter;
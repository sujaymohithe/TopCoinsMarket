import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import OverView from './Containers/MarketOverview/Overview';
import LiquidityAnalysis from './Containers/LiquidityAnalysis/LiquidityAnalysis';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={OverView} />
                <Route exact path="/LiquidityAnalysis"
                    component={LiquidityAnalysis} />
            </Switch>
        </BrowserRouter>
    );
};

export default MainRouter;
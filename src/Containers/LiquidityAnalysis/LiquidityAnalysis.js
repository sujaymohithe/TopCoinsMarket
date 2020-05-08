import React from 'react';
import './LiquidityAnalysis.css';
import LiquidityAnalysisChart
    from '../../Components/LiquidityAnalysis/LiquidityAnalysis';
import {CHART_NOTE} from '../../AppConstants';

const LiquidityAnalysis = props => {
    
    return (
        <div className="analysis-body">
            <LiquidityAnalysisChart coinMarketData={props.coinMarketData}/>
            <p><b>{CHART_NOTE}</b></p>
        </div>
    )
}

export default LiquidityAnalysis;
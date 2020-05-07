import React from 'react';
import { Container } from 'react-bootstrap';
import CoinMarket from '../../Components/CoinMarket';

const Overview = props => {
    return (
        <div className="overview-body">
            <Container>
                <h2>Coin Market</h2>
                {props.coinMarketData &&
                    <CoinMarket data={props.coinMarketData}/>}
            </Container>
        </div>
    )
}

export default Overview;
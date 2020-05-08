import React from 'react';
import './CoinMarket.css';
import { Table } from 'react-bootstrap';

const CoinMarket = props => {
    //below function is used to show coin market data in a table
    const populateCoinMarketTableRow = (row, index) => {
        return (
            <tr key={index}>
                <td>{row.cmc_rank}</td>
                <td>{row.name}</td>                
                <td>${row.quote.USD && row.quote.USD.price && row.quote.USD.price.toFixed(2)}</td>
                <td>{row.quote.USD && row.quote.USD.percent_change_24h && row.quote.USD.percent_change_24h.toFixed(2)}%</td>
                <td>${row.quote.USD && row.quote.USD.market_cap && row.quote.USD.market_cap.toFixed(2)}</td>
                <td>${row.quote.USD && row.quote.USD.volume_24h && row.quote.USD.volume_24h.toFixed(2)}</td>
            </tr>
        );
    }

    return (
        <div>
            <br />
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Price Change (24h)</th>
                        <th>Market Cap</th>
                        <th>Volume (24h)</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data &&
                        props.data.map((eachRow, index) => populateCoinMarketTableRow(eachRow, index))}
                </tbody>
            </Table>
        </div>
    );
}

export default CoinMarket;

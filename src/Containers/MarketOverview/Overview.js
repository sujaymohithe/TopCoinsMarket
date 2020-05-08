import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import CoinMarket from '../../Components/CoinMarket';
import './Overview.css';
import { PAGE_DISPLAY } from '../../AppConstants';

const Overview = props => {
    debugger;
    const [page, setPage] = useState(1);
    const [defaultRecords, setDefaultRecords] = useState('100');
    let limit; let start;
    let maxLimit = 5000;

    const nextButtonClickhandler = () => {
        debugger;
        setPage(page + 1);
        limit = parseInt(defaultRecords);
        start = limit * page + 1;
        props.GetCryptoCurrencyData(start, limit);
    }

    const prevButtonClickhandler = (event) => {
        debugger;
        setPage(page - 1);
        limit = parseInt(defaultRecords);
        start = limit * (page - 2) + 1;
        props.GetCryptoCurrencyData(start, limit);
    }

    const onChangeHandler = (event) => {
        debugger;
        const selectedDefaultvalue = event.target.value === 'Max' ? maxLimit : event.target.value;
        setDefaultRecords(selectedDefaultvalue);
        limit = parseInt(selectedDefaultvalue);
        start = limit * (page - 1) + 1;
        props.GetCryptoCurrencyData(start, limit);
    }

    const startRecords = (page - 1) * parseInt(defaultRecords) + 1;
    const endingRecords = page * parseInt(defaultRecords);
    const max = defaultRecords === 'Max' ? maxLimit : parseInt(defaultRecords);
    return (
        <div className="overview-body">
            <Container>
                <h2>Coin Market</h2>
                <Form className="form-table">
                    <Form.Group controlId="SelectRecords">
                        <div style={{ float: 'left' }}>
                            <Form.Label><b>{PAGE_DISPLAY}</b></Form.Label>{' '}
                            <Form.Control as="select" custom className="form-select"
                                onChange={(event) => onChangeHandler(event)}>
                                {['10', '50', '100', 'Max'].map((val, index) =>
                                    <option selected={defaultRecords === val}
                                        key={index}>{val}</option>)}
                            </Form.Control>
                        </div>
                        <div style={{ float: 'right' }}>
                            <Form.Label><b>Page {page} (Records - {startRecords} to {endingRecords})</b></Form.Label>{' '}
                            {page !== 1 &&
                                <Button onClick={prevButtonClickhandler} variant="info">{'<'}Prev Page</Button>}{' '}
                            {(props.coinMarketData.length === max)  &&
                                <Button onClick={nextButtonClickhandler} variant="info">Next Page{'>'}</Button>}
                        </div>
                    </Form.Group>
                </Form>
                {props.coinMarketData &&
                    <CoinMarket data={props.coinMarketData} />}
            </Container>
        </div>
    )
}

export default Overview;
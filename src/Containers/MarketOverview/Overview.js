import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import CoinMarket from '../../Components/CoinMarketOverview/CoinMarket';
import './Overview.css';
import { PAGE_DISPLAY } from '../../AppConstants';

const Overview = props => {
    let [page, setPage] = useState(1);
    let [defaultRecords, setDefaultRecords] = useState('100');
    let limit, start, maxLimit = 5000;

    //Next page button - get new table data based on page number and number of records limit selected in dropdown
    const nextButtonClickhandler = () => {
        setPage(page + 1);
        limit = parseInt(defaultRecords);
        start = limit * page + 1;
        props.GetCryptoCurrencyData(start, limit);
    }

    //Previous page button, get new table data based on page number and number of records limit selected in dropdown
    const prevButtonClickhandler = (event) => {
        setPage(page - 1);
        limit = parseInt(defaultRecords);
        start = limit * (page - 2) + 1;
        props.GetCryptoCurrencyData(start, limit);
    }

    //get new table data based on change in drop down for number of records
    const onChangeHandler = (event) => {
        const selectedDefaultvalue = event.target.value === 'Max' ? maxLimit : event.target.value;
        setDefaultRecords(selectedDefaultvalue);
        limit = parseInt(selectedDefaultvalue);
        start = limit * (page - 1) + 1;
        props.GetCryptoCurrencyData(start, limit);
    }

    //to show records from 
    const startRecords = (page - 1) * parseInt(defaultRecords) + 1;
    //to show records till
    const endingRecords = page * parseInt(defaultRecords);
    //if Max, set limit to 5000 as per API specification
    const max = defaultRecords === 'Max' ? maxLimit : parseInt(defaultRecords);
    const pageRecordsDropDown = ['10', '50', '100', 'Max'].map((val, index) => {
        return <option selected={defaultRecords === val}
            key={index}>{val}</option>
    });

    return (
        <div className="overview-body">
            <Container>
                <h2>Coin Market</h2>
                {/* pagination form render */}
                <Form className="form-table">
                    <Form.Group controlId="SelectRecords">
                        {/* No of records dropdown */}
                        <div className="float-l">
                            <Form.Label><b>{PAGE_DISPLAY}</b></Form.Label>{' '}
                            <Form.Control as="select" custom className="form-select"
                                onChange={(event) => onChangeHandler(event)}>
                                {pageRecordsDropDown}
                            </Form.Control>
                        </div>
                        {/* Next and Previous button rendered based on records available */}
                        <div className="float-R">
                            <Form.Label>
                                <b>Page {page} (Records - {startRecords} to {endingRecords})</b>
                            </Form.Label>{' '}
                            {page !== 1 &&
                                <Button type="button" onClick={prevButtonClickhandler} variant="info">{'<'}Prev Page</Button>}{' '}
                            {(props.coinMarketData.length === max) &&
                                <Button type="button" onClick={nextButtonClickhandler} variant="info">Next Page{'>'}</Button>}
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
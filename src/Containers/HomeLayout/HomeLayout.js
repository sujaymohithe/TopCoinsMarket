import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';
import Overview from '../MarketOverview/Overview';

const HomeLayout = props => {
    const { GetCryptoCurrencyData } = props;
    useEffect(() => {
        GetCryptoCurrencyData();
    }, [GetCryptoCurrencyData]);
    return (
        <div>
            <Container>
                {props.cryptoCurrencyData &&
                    <Overview coinMarketData={props.cryptoCurrencyData.data}
                        GetCryptoCurrencyData={GetCryptoCurrencyData} />}
            </Container>
        </div>
    )
}

//method that copies part of the state to the props of this component.
const mapStateToProps = state => {
    return {
        loading: state.cryptoCurrency.loading,
        error: state.cryptoCurrency.error,
        cryptoCurrencyData: state.cryptoCurrency.data
    };
};

//these functions will be accessible via props in child components
const mapDispatchToProps = dispatch => {
    return {
        GetCryptoCurrencyData: (start, limit) => dispatch(actions.GetCryptoCurrencyData(start, limit))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeLayout);
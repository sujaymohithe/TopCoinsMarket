import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';
import Overview from '../MarketOverview/Overview'; 
import NavBar from '../../Components/NavBar/NavBar';
import LiquidityAnalysis from '../LiquidityAnalysis/LiquidityAnalysis';
import Spinner from '../../Components/UI/Spinner/Spinner';

const HomeLayout = props => {
    const { GetCryptoCurrencyData } = props;
    const [activeTab, setActivetab] = useState('tab1');

    useEffect(() => {
        GetCryptoCurrencyData();
    }, [GetCryptoCurrencyData]);

    const toggleTabClickhandler = (name) => {
        setActivetab(name);
    }

    return (
        <div>
            <NavBar onActiveTab = {toggleTabClickhandler}/>
            <Container>
                {props.loading && <Spinner />}
                {activeTab === 'tab1' && props.cryptoCurrencyData &&
                    <Overview coinMarketData={props.cryptoCurrencyData.data}
                        GetCryptoCurrencyData={GetCryptoCurrencyData}/>}
                {activeTab === 'tab2' && props.cryptoCurrencyData &&
                    <LiquidityAnalysis coinMarketData={props.cryptoCurrencyData.data}
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
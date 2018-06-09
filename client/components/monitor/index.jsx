import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';

import Container from './../elements/container';

import SellList from './../selllist';
import BuyList from './../buylist';

import BuyForm from './../forms/buy';
import SellForm from './../forms/sell';

import History from './../history';

class Title extends React.Component {
    render() {
        return (
            <Container>
                <Inner>
                    <Item>
                        <SellList />
                        <BuyList />
                    </Item>
                    <Item>
                        <BuyForm />
                        <SellForm />
                    </Item>
                    <Item>
                        <History />
                    </Item>
                </Inner>
            </Container>
        )
    }
}

export default connect(
    ({ state }) => ({
        //   view: state.view
    }),
    // dispatch => bindActionCreators(actions, dispatch)
)(Title);

const Inner = styled.div`
    display: flex;
    width: 100%;
`;

const Item = styled.div`
    width: 100%;
`;

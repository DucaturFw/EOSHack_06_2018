import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';

import Container from './../elements/container';

class Title extends React.Component {
    render() {
        return (
            <Container>
                <Wrap>
                    Trade Markets
                </Wrap>
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

const Wrap = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px;
    text-align: center;
`;

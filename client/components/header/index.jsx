import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';

import Container from './../elements/container';

class Header extends React.Component {
    render() {
        return (
            <Wrap>
                <Container>
                    <Inner>
                        <Name>
                            <h3>l2dex</h3>
                        </Name>
                        <Acc>
                            EOS account: <strong>{ "mike.l2dex" }</strong>
                        </Acc>
                    </Inner>
                </Container>
            </Wrap>
        )
    }
}

export default connect(
    ({ state }) => ({
        //   view: state.view
    }),
    // dispatch => bindActionCreators(actions, dispatch)
)(Header);

const Wrap = styled.div`
    background-color: #262626;
    color: white;
    font-size: 16px;
    height: 40px;
`;

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 7px;
`;

const Name = styled.div``;
const Acc = styled.div``;

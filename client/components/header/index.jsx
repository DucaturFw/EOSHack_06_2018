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
                            l2dex
                        </Name>
                        <Acc>
                            Eos7efeifhwiufh
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
    background-color: #D6E0FC;
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

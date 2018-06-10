import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';

import actions from './../../actions/sellList';

class History extends React.Component {

    get items() {
        const { list } = this.props;

        return list.map((item, idx) => {
            const total = parseInt(item.price, 10) * parseInt(item.amount, 10) || 0

            let type = "buy";
            return <Row key={idx} type={type}>
                <Cell>{type.toUpperCase()}</Cell>
                <Cell>{parseInt(item.price, 10).toFixed(4)}</Cell>
                <Cell>{parseInt(item.amount, 10).toFixed(4)}</Cell>
                <Cell>{(item.price * item.amount).toFixed(4)}</Cell>
            </Row>;
        })
    }

    render() {
        return (
            <Wrap>
                <Title>
                    History
                </Title>
                <Table>
                    <thead>
                        <tr>
                            <HeadCell>Buy/Sell</HeadCell>
                            <HeadCell>Price (EOS)</HeadCell>
                            <HeadCell>Amount (ETH)</HeadCell>
                            <HeadCell>Total (EOS)</HeadCell>
                        </tr>
                    </thead>
                    <tbody>
                        {this.items}
                    </tbody>
                </Table>
            </Wrap>
        )
    }
}

export default connect(
    ({ history }) => ({
        list: history
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(History);

const Wrap = styled.div`
    width: 100%;
`;

const Title = styled.h4`
    text-align: center;
    font-size: 120%;
`;

const Table = styled.table`
    border: 1px solid #eee;
    width: 100%;
`;

const Row = styled.tr`
    cursor: pointer;

    color: ${props => (props.type == 'buy') ? '#70a800' : '#ea0070'}

    &:hover {
        background: #f7f7f7;
    }
`;

const HeadCell = styled.th`
    text-align: right;
`;

const Cell = styled.td`
    text-align: right;
`;

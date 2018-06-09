import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';

import actions from './../../actions/sellList';

class History extends React.Component {

    get items() {
        const { list } = this.props;

        return list.map(item => {
            const total = parseInt(item.price, 10) * parseInt(item.amount, 10) || 0

            return <Row key={item.id}>
                <Cell>{item.amount}</Cell>
                <Cell>{item.price}</Cell>
                <Cell>{total}</Cell>
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
                            <HeadCell>Price</HeadCell>
                            <HeadCell>Amount</HeadCell>
                            <HeadCell>Total</HeadCell>
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

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';

import actions from './../../actions/buyList';

class BuyList extends React.Component {

    handleClick = item => {
        this.props.choice(item);
    }

    get items() {
        const { list } = this.props;

        if (list && list.length) {
            return list.map((item, idx) => {
                const total = parseInt(item.price, 10) * parseInt(item.amount, 10) || 0

                return <Row key={idx} onClick={this.handleClick.bind(this, item)}>
                    <Cell>{item.amount}</Cell>
                    <Cell>{item.price}</Cell>
                    <Cell>{total}</Cell>
                </Row>;
            })
        }
        else {
            return <Row><Cell colSpan="3" style={{ textAlign: "center", marginTop: "10px" }}>No active orders</Cell></Row>
        }
    }

    render() {
        return (
            <Wrap>
                <Title>
                    Buy Orders
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
    ({ buyList }) => ({
        list: buyList
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(BuyList);

const Wrap = styled.div`
    width: 100%;
`;

const Title = styled.h4`
    text-align: center;
    font-size: 120%;
    margin-bottom: 8px;
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
    text-align: center;
`;

const Cell = styled.td`
    text-align: right;
`;

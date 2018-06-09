import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';

import actions from './../../actions/buyform';

export default class ExchangeForm extends React.Component {

    state = {
        price: '',
        amount: ''
    }

    componentWillReceiveProps(props) {
        this.setState(state => ({
            ...state,
            ...props.view,
        }));
    }

    handleInput = e => {
        this.props.change({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.submit();
    }

    render() {
        const { title, btnTitle } = this.props;

        const { amount, price } = this.state;
        const amountNumber = parseInt(amount, 10);
        const priceNumber = parseInt(price, 10);
        const total = amountNumber * priceNumber || 0;

        return (
            <Wrap>
                <Title>{title}</Title>
                <Form onSubmit={this.handleSubmit}>
                    <Item>
                        <Label>
                            <Txt>
                                Price
                            </Txt>
                            <Input
                                name={"price"}
                                value={this.state.price}
                                onChange={this.handleInput}
                            />
                        </Label>
                    </Item>
                    <Item>
                        <Label>
                            <Txt>
                                Amount
                            </Txt>
                            <Input
                                name={"amount"}
                                value={this.state.amount}
                                onChange={this.handleInput}
                            />
                        </Label>
                    </Item>
                    <Item>
                        <Label>
                            <Txt>
                                Total
                            </Txt>
                            <Input
                                disabled
                                name={"total"}
                                value={total}
                            />
                        </Label>
                    </Item>
                    <Item>
                        <button type="submit">{btnTitle}</button>
                    </Item>
                </Form>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    font-size: 12px;
    text-align: center;
`;

const Title = styled.h4`
    text-align: center;
`;

const Form = styled.form`
    background: #f7f7f7;
    padding: 5px;
`;

const Item = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Label = styled.label`
`;

const Txt = styled.span`
    display: inline-block;
    width: 60px;
    text-align: right;
    padding-right: 20px;
`;

const Input = styled.input`
    padding: 4px;
`;

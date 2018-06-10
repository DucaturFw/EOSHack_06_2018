import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';

import actions from './../../actions/buyform';

export default class ExchangeForm extends React.Component {

    state = {
        price: '35',
        amount: '1'
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
                                Price <small>(EOS)</small>
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
                                Amount <small>(ETH)</small>
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
                                Total <small>(EOS)</small>
                            </Txt>
                            <Input
                                disabled
                                name={"total"}
                                value={total}
                            />
                        </Label>
                    </Item>
                    <Item>
                        <Btn type="submit">{btnTitle}</Btn>
                    </Item>
                </Form>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    text-align: center;
`;

const Title = styled.h4`
    text-align: center;
    font-size: 120%;
    margin-bottom: 8px;
`;

const Form = styled.form`
    background: #f7f7f7;
    border: 1px solid #e6e6e6;
    padding: 5px;
    margin-bottom: 20px;
`;

const Item = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Label = styled.label`
`;

const Txt = styled.span`
    display: inline-block;
    width: 160px;
    text-align: right;
    padding-right: 20px;
`;

const Input = styled.input`
    padding: 4px;
`;

const Btn = styled.button`
    outline: none;
    cursor: pointer;
    border: none;
    border: 1px solid #d6d6d6;
    background: #e7e7e7;
    // color: white;
    border-radius: 0;
    padding: 10px 50px;
`;

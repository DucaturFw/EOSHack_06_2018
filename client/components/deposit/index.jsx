import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';
import Eos from 'eosjs'

const PK = '5Kat1ikjeVg29vB1yxN6vNLqQy5AogsUdKcehPrzJ9iX8iM2VSd'

const ecc = Eos.modules.ecc

export default class DepositForm extends React.Component {
	state = {
		eth: '0',
		eos: '0'
	}

	scatter

	componentDidMount(){
		window.eos = Eos({
			// chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f", // 32 byte (64 char) hex string
			chainId: null,
			keyProvider: PK, // WIF string or array of keys..
			httpEndpoint: "http://35.172.116.56:8888",
			// mockTransactions: () => 'pass', // or 'fail'
			/* transactionHeaders: (expireInSeconds: any, callback: (error: any, headers: any)) => {
				callback(undefined, headers)
			}, */
			expireInSeconds: 60,
			broadcast: true,
			// debug: false, // API and transactions
			// debug: true,
			sign: true,
		})
		/* if (window.scatter)
			this.initScatter()
		else
			document.addEventListener('scatterLoaded', scatterExtension => {
				this.initScatter()
			}) */
		// You can require certain fields
	}
	initScatter()
	{
		// Scatter will now be available from the window scope.
		// At this stage the connection to Scatter from the application is 
		// already encrypted. 
		this.scatter = window.scatter

		
		// It is good practice to take this off the window once you have 
		// a reference to it.
		// delete window.scatter
		
		// If you want to require a specific version of Scatter
		// scatter.requireVersion(3.0);
		
		const networkEOS = {
			blockchain: 'eos',
			host: '35.172.116.56',
			port: 8888,
			chainId: null,
		}
		this.scatter.suggestNetwork(networkEOS).then(x =>
		{
			this.scatter.getIdentity(/* {accounts:[networkEOS]} */).then(identity => {
				console.log(identity)
				this.scatter.authenticate()
					.then(sig => {
						// This will return your `location.host` 
						// signed with their Identity's private key.
						// It has already been validated, but you can validate it yourself as well using eosjs-ecc.
						
						ecc.verify(sig, location.host, scatter.identity.publicKey);
						window.eos = this.scatter.eos(networkEOS, Eos, {}, 'http')
					})
					.catch(err => console.log('auth err', err))
			}).catch(error => {
				console.log(error)
			})
		})
	}

    componentWillReceiveProps(props) {
        this.setState(state => ({
            ...state,
            ...props.view,
        }));
    }

    handleInput = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

	submitEos = e => {
		e.preventDefault()
		console.log("eos!")
		if (!window.eos)
			return console.log("eos haven't loaded yet")
		
		let amount = this.state.eos
		let auth = { authorization: "tester1", sign: true }
		/* window.eos.contract('hello2.code', auth).then(contract => {
			console.log(contract)
			contract.hi('huy', auth).then(x => console.log(x)).catch(err => console.error(err))
		}); */
		console.log(`${parseFloat(amount).toFixed(4)} SYS`)
		window.eos.contract('l2dex.code', auth).then(contract => {
			console.log(contract)
			contract.open({
				opener: 'tester1',
				pub_key: Eos.modules.ecc.privateToPublic(PK),
				respondent: 'l2dex.code',
				resp_key: Eos.modules.ecc.privateToPublic(PK),
				quantity: `${parseFloat(amount).toFixed(4)} SYS`,
				pair: "ETH"
			}, auth).then(x => console.log(x)).catch(err => console.error(err))
		});
		console.log(Eos.modules.ecc.sign('3115243634764460243;10;7', PK))
	}
	submitEth = e => {
		e.preventDefault()
		console.log("eth!")
	}
	
	getForm = ({ submit, name, change }) =>
		<Form onSubmit={submit}>
			<Item>
				<Label>
					<Txt>
						{name.toUpperCase()}
					</Txt>
					<Input
						name={name}
						value={this.state[name]}
						onChange={change}
					/>
				</Label>
			</Item>
			<Item>
				<Btn type="submit">Deposit</Btn>
			</Item>
		</Form>
	
	render() {
		return <Container>
			<Title>Deposit funds</Title>
			<FormContainer>
				{this.getForm({name: "eos", submit: this.submitEos, change: this.handleInput})}
				{this.getForm({name: "eth", submit: this.submitEth, change: this.handleInput})}
				{/* <_form name="eos" submit={this.submitEos} change={this.handleInput}></_form>
				<_form name="eth" submit={this.submitEth} change={this.handleInput}></_form> */}
			</FormContainer>
		</Container>
	}
}

let Container = styled.div`
	width: 100%;
    text-align: center;
`

let FormContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
`

let Title = styled.h1`
	margin-top: 20px;
	margin-bottom: 20px;
	text-align: center;
`

const Form = styled.form`
    background: #f7f7f7;
    border: 1px solid #e6e6e6;
    padding: 5px;
	margin-bottom: 20px;
	width: 300px;
	
	display: inline-block;
	margin-left: 20px;
	margin-right: 20px;
`;

const Item = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Label = styled.label`
`;

const Txt = styled.span`
    display: inline-block;
    // width: 60px;
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

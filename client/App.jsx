import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/styles.css';

import Header from './components/header';
import Title from './components/title';
import Monitor from './components/monitor';
import DepositForm from './components/deposit';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/deposit">
              <Container>
                <Header />
                <DepositForm />
              </Container>
            </Route>
            <Route path="/">
              <Container>
                <Header />
                <Title />
                <Monitor />
              </Container>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

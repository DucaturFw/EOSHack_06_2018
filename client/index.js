import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';

import App from './App';
import { configureStore } from './store';
import sockets from './sockets';

const store = configureStore();
sockets({
  dispatch: store.dispatch.bind(store)
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById("root"));

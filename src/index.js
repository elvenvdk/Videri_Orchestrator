import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import "./index.scss";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./reducers";

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

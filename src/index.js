import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import Node from "./containers/Node";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import LayoutRoot from "./LayoutRoot";

const store = configureStore();

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <LayoutRoot />
    </Provider>,
    document.getElementById("root")
  );

render();
if (module.hot) module.hot.accept("./containers/Node", () => render());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

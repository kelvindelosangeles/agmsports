import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import GlobalState from "./redux/reducers/GlobalState";

import { createGlobalStyle, StyleSheetManager } from "styled-components";
import Colors from "./constants/Colors";

const rootReducer = combineReducers({
    GlobalState: GlobalState,
});

const initialState = {};

const store = createStore(rootReducer, initialState, composeWithDevTools());

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
}

a{
    text-decoration: none;
    color: ${Colors.black}
}
`;

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
});

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <GlobalStyle />
                <StyleSheetManager disableVendorPrefixes>
                    <App />
                </StyleSheetManager>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

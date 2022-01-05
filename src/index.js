import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserHistory} from "history";
import reduxHistoryPushMiddleware from "redux-history-push-middleware/src";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {BrowserRouter as Router} from "react-router-dom";
import {rootReducer} from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {ThemeProvider} from "./ThemeProvider";

const history = createBrowserHistory()
const reduxHistoryPush = reduxHistoryPushMiddleware(history);
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, reduxHistoryPush))
);

ReactDOM.render((
    <Provider store={store}>
        <ThemeProvider>
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    </Provider>
    ),
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
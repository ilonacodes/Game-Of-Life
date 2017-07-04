import React from "react";
import {render} from "react-dom";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {hashHistory, Route, Router} from "react-router";
import {routerMiddleware, routerReducer, syncHistoryWithStore} from "react-router-redux";
import thunk from "redux-thunk";
import {boardReducer} from "./components/reducers";
import {BoardContainer} from "./components/BoardContainer";

const App = () => <div>hello world</div>;
const dummyReducer = (state = {}, action) => state;

const store = createStore(
    combineReducers({
        dummyReducer,
        routing: routerReducer,
        board: boardReducer,
    }),
    applyMiddleware(thunk, routerMiddleware(hashHistory)),
);

const history = syncHistoryWithStore(hashHistory, store);

const Main =
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}/>
            <Route path='/board' component={BoardContainer}/>
        </Router>
    </Provider>;

render(Main, document.getElementById('app'));

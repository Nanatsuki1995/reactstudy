/*
 * @Author: zengjian 
 * @Date: 2018-12-15 10:01:32 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-15 11:55:49
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import reducer from './reducer/index'
import createStore from './store/store'
import Provider from './redux/Provider'
import middlewares from './middleware'
import logger from './middleware/logger'

import App from './container/index'
import 'antd/dist/antd'

const store = middlewares(new createStore(reducer,{}),[logger])

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//createStore 创建一个数据容器
//combineReducers 将reducer合并的方法
//applyMiddleware 中间件

import {createStore,combineReducers,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'  //处理异步流的一个中间件
import reducers from '../reducer/reducer'    //数据加工处理
import rootSaga from '../saga/rootSaga'      //处理异步的方法

//将reducers合并
const todoApp=combineReducers({
    test:reducers
})
//注册saga
const sagaMiddleware = createSagaMiddleware()
//创建store

//创建store   他的第一个方法就是reducer的集合，第二个为中间件 
 const store= createStore(todoApp,applyMiddleware(sagaMiddleware));
 sagaMiddleware.run(rootSaga)   

 export default store

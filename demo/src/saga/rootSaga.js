
import { all, fork ,take, call, put, cancel} from 'redux-saga/effects'
import {increase,decrease} from '../action/action' 

//增加
function* inc(){
    while(true){
        //其实这里就是拿到app dispatch发起的action请求参数
        const action=yield take('INCREASE')
        //这里是将action.payload发送给reducer处理
        yield put(increase(action.payload.num))
    }
}

//减
function* dec(){
    while(true){
        const action=yield take('DECREASE')
        yield put(decrease(action.payload.num))
    }
}


export default function* root() {
    yield all([
      fork(inc),
      fork(dec)
    ])
  }
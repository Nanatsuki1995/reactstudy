import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {decrease,increase} from './action/action'
import {connect} from 'react-redux'



class App extends Component {
  constructor(props){
    super(props)
  }

  
  //props  这个东西从react生命周期一开始就会有 这个会根据组件集成到各个组件
  componentDidMount(){
   
  }

  add=()=>{
    const {dispatch,}=this.props
    dispatch(increase(this.props.test.COUNT.num+2))//将action中定义的COUNT下的payload下的num + 1
  }

  reduce=()=>{
    const {dispatch}=this.props
    dispatch(decrease(this.props.test.COUNT.num-1))
  }


  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.add}>加2</button>
          <button onClick={this.reduce}>减1</button>
          <input type='text'  value={this.props.test.COUNT.num} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect(store=>({
  test:store.test
}))(App) ;

/*
let store={
  test:{},
  login:{
    pending:false,
    username:xxx,
    password:xxx,
    validCode:xxx
  }, //登录
  commnets:{
    username:xxx,
    content:'',
    datetime:''
  }, //评论
  list:{
    data:[
      {
        name:'张三',
        content:'Neirong'
      },
      {
        name:'张三',
        content:'Neirong'
      }
    ]

  }
}*/
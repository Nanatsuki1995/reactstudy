

const initialState={
    COUNT:{num:0}
}

//处理store某个节点的数据 
//他的工作原理。 初始化将initilaState赋值给reducer 如果action.payload有值传入，则直接覆盖 返回新对象
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case'LOGIN':
            return {...state}
        case'LOUGOUT':
            return {...state}
        case 'INCREASE':
            return {...state,COUNT:action.payload} //{...{}} 会生成新对象 必须是新对象
            //将COUNT中经过saga处理后的数据传递到initilaState，通过对象传递
        case 'DECREASE':
            return {...state,COUNT:action.payload}
        default:
            return state
    }
}

export default reducer
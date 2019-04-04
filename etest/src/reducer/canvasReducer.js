/*
 * @Author: zengjian 
 * @Date: 2018-12-15 10:37:37 
 * @Last Modified by:   zengjian 
 * @Last Modified time: 2018-12-15 10:37:37 
 */
let initialState = {
    zoom:70
}

const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'updateZoom':
            return {...state,zoom:action.payload}
        default:
            return state
    }
}

export default reducer
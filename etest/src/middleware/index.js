/*
 * @Author: zengjian 
 * @Date: 2018-12-15 10:08:15 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-15 10:08:50
 */
export default function applyMiddleware(store,middlewares){
    middlewares = middlewares.slice()
    middlewares.reverse()

    let dispatch = store.dispatch
    middlewares.forEach(middleware =>
        dispatch = middleware(store)(dispatch)
    )

    return Object.assign({},store,{dispatch})
}
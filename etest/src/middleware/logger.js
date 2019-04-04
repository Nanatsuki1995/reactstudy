/*
 * @Author: zengjian 
 * @Date: 2018-12-15 10:12:05 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-15 10:14:55
 */
const logger = store => next => action => {
    console.log('dispatching',action)
    let result = next(action)
    console.log('next state',store.getState())
    return result
}

export default logger
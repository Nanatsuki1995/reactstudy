/*
 * @Author: zengjian 
 * @Date: 2018-12-15 10:33:47 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-15 10:37:12
 */
export const combinReducer=(reducers)=>{
    const finalState = {}
    return (state,action)=>{
        for(const k of Object.keys(reducers)){
            finalState[k]=reducers[k](state[k],action)
        }
        return finalState
    }
}
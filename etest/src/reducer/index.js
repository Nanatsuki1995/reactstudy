/*
 * @Author: zengjian 
 * @Date: 2018-12-15 10:40:25 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-15 10:41:56
 */
import {combinReducer} from './combinReducer'
import canvasReducer from './canvasReducer'

export default combinReducer({
    canvas:canvasReducer
})
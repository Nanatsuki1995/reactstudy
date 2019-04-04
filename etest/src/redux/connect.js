/*
 * @Author: zengjian 
 * @Date: 2018-12-15 10:15:16 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-15 10:23:07
 */
import React from 'react'
import Customer from './context'

const connect = (fn) => (Wrapper) => {
    return class HOC extends React.Component {
        render() {
            return <Customer.Consumer>
                {(props)=>{
                    let newProps={}
                    if (typeof fn === 'function') {
                        newProps={...fn(props),dispatch:props.dispatch}
                    }else{
                        newProps={dispatch:props.dispatch}
                    }

                    return <Wrapper  {...this.props} {...newProps} />
                }}
            </Customer.Consumer>
        }
    }
}

export default connect
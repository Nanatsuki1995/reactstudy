/*
 * @Author: zengjian 
 * @Date: 2018-12-15 11:06:21 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-15 11:10:23
 */
import React from 'react'
import './index.scss'
import connect from '../../redux/connect'

class CanvasCmp extends React.Component{
    static defaultProps = {
        zoom:70
    }

    render(){
        const percent = this.props.zoom/100
        return <div className='cp-canvas' style={{width:800*percent,height:600*percent}}></div>
    }
}

export default connect(state=>state.canvas)(CanvasCmp)
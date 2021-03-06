/*
 * @Author: zengjian 
 * @Date: 2018-12-15 11:14:55 
 * @Last Modified by:   zengjian 
 * @Last Modified time: 2018-12-15 11:14:55 
 */
import React from 'react'
import {Slider} from 'antd'
import connect from '../../redux/connect'

class SliderCmp extends React.Component{
    static defaultProps = {
        zoom:70
    }

    onChange=(e)=>{
        const {dispatch}=this.props
        dispatch({
            type:'updateZoom',
            payload:e
        })
    }

    render(){
        return <Slider
            onChange={this.onChange}
            min={50}
            step={10}
            max={200}
            value={this.props.zoom}
        />
    }
}

export default connect(state=>state.canvas)(SliderCmp)
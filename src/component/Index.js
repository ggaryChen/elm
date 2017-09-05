import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Index extends Component{
    render(){
        return (
            <div>
                <p><Link to='/find'>发现</Link></p>
                <p><Link to='/order'>订单</Link></p>
                <p><Link to='/user'>我的</Link></p>
                <p>你好</p>
            </div>
        )
    }
}
export default Index;
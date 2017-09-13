import React, {Component} from 'react';
import {WhiteSpace} from 'antd-mobile';
import Footbar from '../common/footbar';
import Headbar from '../common/headbar';
import Commonlist from '../common/commonlist';

const logo = require('../icon/elmlogo.jpeg');
const listData = [
    {logo:logo,title:'elm'},
    {logo:logo,title:'elm'},
    {logo:logo,title:'elm'},
    {logo:logo,title:'elm'}
]
const userMes = [{
    logo:logo,title:'以为我会说吗',text:'18374833620',rtext:'更多'
}]

class User extends Component{
    render(){
        return (
            <div>
                <Headbar title='我的'/>
                <Commonlist data = {userMes}/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Commonlist data = {listData}/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Commonlist data = {listData}/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Commonlist data = {listData}/>
                <Footbar current='user'/>
            </div>
        )
    }
}
export default User;
import React, {Component} from 'react';
import {Grid,WhiteSpace,} from 'antd-mobile';
import Footbar from '../common/footbar';
import Headbar from '../common/headbar';
import Commonlist from '../common/commonlist';

const logo = require('../icon/elmlogo.jpeg');
const gridData = [
    {icon:logo,text:'1'},{icon:logo,text:'2'},{icon:logo,text:'3'},{icon:logo,text:'4'},
    {icon:logo,text:'5'},{icon:logo,text:'6'},{icon:logo,text:'7'},{icon:logo,text:'8'}
]
const listData = [
    {logo:logo,title:'elm',text:'hahaha'},
    {logo:logo,title:'elm',text:'hahaha'},
    {logo:logo,title:'elm',text:'hahaha'},
    {logo:logo,title:'elm',text:'hahaha'}
]
class Index extends Component{
    render(){
        return (
            <div>
                <Headbar title='饿了么' search='true'/>
                <Grid data={gridData} hasLine={false}/>
                <WhiteSpace/>
                <Commonlist data={listData} />
                <WhiteSpace/>
                <Commonlist data={listData} />
                <Footbar current='index'/>
            </div>
        )
    }
}
export default Index;

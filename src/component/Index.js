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
    {logo:logo,title:'js',text:'hahaha',class:'shop'},
    {logo:logo,title:'css',text:'hahaha',class:'shop'},
    {logo:logo,title:'html',text:'hahaha',class:'shop'},
    {logo:logo,title:'node',text:'hahaha',class:'shop'}
]
class Index extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return (
            <div>
                <Headbar title='饿了么' search='true' history={this.props.history}/>
                <Grid data={gridData} hasLine={false} onClick = {() => {this.props.history.push('/find')}}/>
                <WhiteSpace/>
                <Commonlist data={listData} history={this.props.history}/>
                <WhiteSpace/>
                <Commonlist data={listData} history={this.props.history}/>
                <Footbar current='index'/>
            </div>
        )
    }
}
export default Index;

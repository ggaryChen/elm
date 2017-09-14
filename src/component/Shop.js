import React, {Component} from 'react';
import {WhiteSpace,Tabs,Badge} from 'antd-mobile';
import {Route} from 'react-router-dom';
import Footbar from '../common/footbar';
import Headbar from '../common/headbar';
import Commonlist from '../common/commonlist';

const TabPane = Tabs.TabPane;
const logo = require('../icon/elmlogo.jpeg');
const listData = [
    {logo:logo,title:'elm',text:'hahaha',good:'true'},
    {logo:logo,title:'elm',text:'hahaha',good:'true'},
    {logo:logo,title:'elm',text:'hahaha',good:'true'},
    {logo:logo,title:'elm',text:'hahaha',good:'true'}
]
class Shop extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <div>
                <Headbar title='商店' history={this.props.history}/>
                <Route path="/shop/:name" component={Shopname}/>
                <WhiteSpace/>
                <Tabs defaultActiveKey="1" swipeable>
                    <TabPane tab={<Badge>商品</Badge>} key="1">
                        <Commonlist data={listData}/>
                    </TabPane>
                    <TabPane tab={<Badge>评价</Badge>} key="2">
                        <Commonlist data={listData}/>
                    </TabPane>
                </Tabs>
                <Footbar/>
            </div>
        )
    }
}
const Shopname = ({ match }) => {
    const name = match.params.name
    return (
        <div>
            <Commonlist data={[{title:name,text:'hahaha'}]}/>
        </div>
    )
}
export default Shop;
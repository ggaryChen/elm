import React, {Component} from 'react';
import {Tabs,Badge} from 'antd-mobile';
import Footbar from '../common/footbar';
import Headbar from '../common/headbar';

const TabPane = Tabs.TabPane;
class Order extends Component{
    render(){
        return (
            <div>
                <Headbar title='订单' history={this.props.history}/>
                <Tabs defaultActiveKey="2" swipeable>
                    <TabPane tab={<Badge text={'3'}>First Tab</Badge>} key="1">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '9rem', backgroundColor: '#fff' }}>
                            Content of First Tab
                        </div>
                    </TabPane>
                    <TabPane tab={<Badge text={'今日(20)'}>Second Tab</Badge>} key="2">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '9rem', backgroundColor: '#fff' }}>
                            Content of Second Tab
                        </div>
                    </TabPane>
                    <TabPane tab={<Badge dot>Third Tab</Badge>} key="3">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '9rem', backgroundColor: '#fff' }}>
                            Content of Third Tab
                        </div>
                    </TabPane>
                </Tabs>
                <Footbar current='order'/>
            </div>
        )
    }
}
export default Order;
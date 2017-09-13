import React,{Component} from 'react';
import { TabBar, Icon,WhiteSpace } from 'antd-mobile';
import {Redirect} from 'react-router-dom';

class Footbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: this.props.current,
            red:''
        };
    }
    render() {
        return (
            <div>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <TabBar
                    unselectedTintColor="#333333"
                    barTintColor="white"
                    tintColor="#108ee9"
                >
                    <TabBar.Item
                        icon={<Icon type='koubei-o' />}
                        selectedIcon={<Icon type='koubei' />}
                        title="外卖"
                        key="外卖列表"
                        selected={this.state.selectedTab === 'index'}
                        onPress={() => {
                            this.setState({
                            selectedTab: 'index',
                            red:'i'
                            });
                        }}
                    >
                    {this.state.red === 'i'&&<Redirect push to="/" />}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<Icon type='search' />}
                        selectedIcon={<Icon type='search' />}
                        title="探索"
                        key="商家列表"
                        selected={this.state.selectedTab === 'find'}
                        onPress={() => {
                            this.setState({
                            selectedTab: 'find',
                            red:'f'
                            });
                        }}
                    >
                    {this.state.red === 'f'&&<Redirect push to="/find" />}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<Icon type='check-circle-o' />}
                        selectedIcon={<Icon type='check-circle' />}
                        title="订单"
                        key="订单中心"
                        selected={this.state.selectedTab === 'order'}
                        onPress={() => {
                            this.setState({
                            selectedTab: 'order',
                            red:'o'
                            });
                        }}
                    >
                    {this.state.red === 'o'&&<Redirect push to="/order" />}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<Icon type='ellipsis' />}
                        selectedIcon={<Icon type='ellipsis' />}
                        title="账户"
                        key="个人中心"
                        selected={this.state.selectedTab === 'user'}
                        onPress={() => {
                            this.setState({
                            selectedTab: 'user',
                            red:'u'
                            });
                        }}
                    >
                    {this.state.red === 'u'&&<Redirect push to="/user" />}
                    </TabBar.Item>
                </TabBar >
            </div>
        )
    }
}
export default Footbar;

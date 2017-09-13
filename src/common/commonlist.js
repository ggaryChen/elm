import React , {Component} from 'react';
import {List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class Commonlist extends Component{
    constructor(props){
        super(props)
        this.state={
            data:this.props.data
        }
    }
    render(){
        const data = this.state.data;
        return (
            <div>
                <List>
                    {data.map((item,index) => {return (<Item arrow='horizontal' 
                                                            multipleLine={!(!item.text)} 
                                                            thumb={item.logo} key={index}
                                                            extra={item.rtext}
                                                        >
                                                            {item.title}
                                                            <Brief>{item.text}</Brief>
                                                        </Item>)})}
                </List>
            </div>
        )
    }
}
export default Commonlist;
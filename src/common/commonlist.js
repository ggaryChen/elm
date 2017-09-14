import React , {Component} from 'react';
import {List,Icon} from 'antd-mobile';
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
                    {data.map((item,index) => {return (<Item arrow={!item.good&&'horizontal'}
                                                            multipleLine={!(!item.text)} 
                                                            thumb={item.logo} key={index}
                                                            extra={(!!item.good)?<div><Icon type="left" size="md" color="red" /><Icon type="right" size="md" color="red" /></div>:item.rtext}
                                                            onClick={(!!item.class)?() => {this.props.history.push('/'+item.class+'/'+item.title)}:''}
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
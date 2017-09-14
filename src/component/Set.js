import React, {Component} from 'react';
import {WhiteSpace,Button} from 'antd-mobile';
import {Route} from 'react-router-dom';
import Footbar from '../common/footbar';
import Headbar from '../common/headbar';
import Commonlist from '../common/commonlist';

const listData = [
    {title:'elm'},
    {title:'elm'},
    {title:'elm'},
    {title:'elm'}
]
class Set extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <div>
                <Headbar title='设置' history={this.props.history}/>
                <Route path="/set/:name" component={Setname}/>
                <WhiteSpace/>
                <Commonlist data={listData}/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Button className="btn" type="primary">确定</Button>
                <Footbar/>
            </div>
        )
    }
}
const Setname = ({ match }) => {
    const name = match.params.name
    return (
        <div>
            <Commonlist data={[{title:name,text:'hahaha'}]}/>
        </div>
    )
}
export default Set;
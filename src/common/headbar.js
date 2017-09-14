import React , {Component} from 'react';
import {NavBar,Icon,SearchBar,WhiteSpace} from 'antd-mobile';

class Headbar extends Component{
    constructor(props){
        super(props)
        this.state={
            title:this.props.title,
            search:this.props.search
        }
    }
    onLeftClickHandler = (e)=>{
        e.preventDefault();
        this.props.history.goBack()
    }
    onRightClick = (e)=>{
        e.preventDefault();
        this.props.history.push('/index')
    }
    render(){
        return (
            <div className='headbar'>
                <div style={{position:'fixed',top:'0',zIndex:'999',overflow:'hidden',width:'100%'}}>
                    <NavBar
                        onLeftClick={this.onLeftClickHandler.bind(this) }
                        mode='dark'
                        rightContent={[
                            <Icon key="1" onClick={this.onRightClick.bind(this)} type="ellipsis" />,
                        ]}
                    >
                        {this.state.title}
                    </NavBar>
                    {this.state.search==='true'&&<SearchBar placeholder='搜索' style={{background:'#108ee9'}} />}
                </div>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                {this.state.search==='true'&&<div>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                </div>}
            </div>
        )
    }
}
export default Headbar;
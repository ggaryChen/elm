import React, {Component} from 'react';
import {Card} from 'antd-mobile';
import Footbar from '../common/footbar'
import Headbar from '../common/headbar'
class Find extends Component{
    render(){
        return (
            <div>
                <Headbar title='探索'/>
                <Card full>
                    <Card.Header
                        title="This is title"
                        thumb={require('../icon/elmlogo.jpeg')}
                        extra={<span>this is extra</span>}
                    />
                    <Card.Body>
                        <div>This is content of `Card`</div>
                    </Card.Body>
                    <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
                <Footbar current='find'/>
            </div>
        )
    }
}
export default Find;
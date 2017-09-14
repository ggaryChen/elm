import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
// 引入组件
import Index from './component/Index';
import Find from './component/Find';
import Order from './component/Order';
import User from './component/User';
import Shop from './component/Shop';
import Set from './component/Set';
// 样式
import './App.css';
// 历史记录
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();
const gotoHome = () => {
    return (
        <Redirect push to="/" />
    )
}

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        return this.props.children
    }
}
class App extends Component {
  render() {
    return (
		<Router basename="/elm">
			<div>
				<ScrollToTop>
					<ReactCSSTransitionGroup
						transitionName="fade"
						transitionEnterTimeout={300}
						transitionLeaveTimeout={300}
					>
						<Switch>
							<Route exact history={history}
                                   path="/"
                                   component={Index}/>
                            <Route exact
                                   path="/index" history={history}
                                   component={gotoHome}/>
							<Route exact history={history}
                                   path="/find"
                                   component={Find}/>
							<Route exact history={history}
                                   path="/order"
                                   component={Order}/>
							<Route exact history={history}
                                   path="/user"
                                   component={User}/>
                            <Route history={history}
                                   path="/shop"
                                   component={Shop}/>
                            <Route history={history}
                                   path="/set"
                                   component={Set}/>
						</Switch>
                	</ReactCSSTransitionGroup>
                </ScrollToTop>
        	</div>
    	</Router>
    );
  }
}

export default App;

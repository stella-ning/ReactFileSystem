import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory ,browserHistory,IndexRoute,Redirect,Link,IndexLink} from 'react-router';

var App = React.createClass({
	render:function(){
		return(
			<div>
				APP
				<ul role="nav">
			    	<li><Link activeStyle={{color: 'red'}} to="about">About</Link></li>
			        <li><Link activeStyle={{color: 'red'}} to="repos">Repos</Link></li>
			    </ul>
				{this.props.children}
			</div>
		)
	}
})
var Repos = React.createClass({
	render:function(){
		return(
			<div>Repos</div>
		)
	}
})
var About = React.createClass({
	render:function(){
		return(
			<div>About</div>
		)
	}
})
const Home = React.createClass({
    render:function () {
        return (
            <div>
                <Repos/>
				<About/>
            </div>
        )
    }
})
const RouteStudy = React.createClass({
	render:function(){
		return (
			<div>
                <h3>i love you</h3>
				<Router history={hashHistory}>
				    <Route path="/" component={App}>
						<IndexRoute component={Home}/>
	                    <Route path="home" component={Home}/>
				    	<Route path="/repos" component={Repos}/>
				    	<Route path="/about" component={About}/>
				    </Route>
				</Router>
            </div>
		)
	},
})
export default RouteStudy;

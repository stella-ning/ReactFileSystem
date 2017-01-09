import React from 'react';
import {
    Router,
    Route,
    hashHistory ,
    browserHistory,
    IndexRoute,
    Redirect,
    Link,
    IndexLink
}from 'react-router';
import Todo from './homework/todomvc';
import Component from './homework/component';
import Student from './homework/student';
import Clound from './homework/stella-clound';
import './index.css';
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
//导航组件antd
const Slider = React.createClass({
	getInitialState:function() {
		return {
			theme: 'light',
		};
	},
	changeTheme:function(value){
		this.setState({
			theme:value ? 'dark' : 'light',
		})
	},
	handleClick:function(e){
		console.log('click ', e);
	},
	render:function(){
		return(
			<div className='menu'>
				<Switch onChange={this.changeTheme} checkedChildren="Dark" unCheckedChildren="Light" />
				<Menu theme={this.state.theme}
                      onClick={this.handleClick}
                      selectedKeys={[this.state.current]}
                      mode="inline"
                >
                    <Menu.Item key="/todomvc" ><Link activeStyle={{color:'red'}} to="todomvc">todo-mvc</Link></Menu.Item>
                    <Menu.Item key="/component"><Link activeStyle={{color:'red'}} to="component">自定义组件</Link></Menu.Item>
                    <Menu.Item key="/student"><Link activeStyle={{color:'red'}} to="student">学生信息管理系统</Link></Menu.Item>
					<Menu.Item key="/clound"><Link activeStyle={{color:'red'}} to="clound">stella云盘</Link></Menu.Item>
                </Menu>
			</div>
		)
	}
})

var R = React.createClass({
	render:function(){
		return(
			<Router history={hashHistory}>
				<Route path='/' component={App}>
					<IndexRoute component={Todo}/>
					<Route path='todomvc' component={Todo}/>
					<Route path='component' component={Component}/>
					<Route path='student' component={Student}/>
					<Route path="clound" component={Clound}>
						<Route path='*' component={Clound}/>
                    </Route>
				</Route>
			</Router>
		)
	}
})
var App = React.createClass({
	render(){
		return(
			<div>
				<Slider/>
				{this.props.children}
			</div>

		)
	}
})

var Routers = React.createClass({
	render:function(){
		return(
			<div>
				<R/>
			</div>

		)
	}
})

export default Routers;

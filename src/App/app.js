//import React from 'react';
var ChildA = require('./child-a'),
    ChildB = require('./child-b'),
    React = require('react'),
    request = require('superagent');
    import './App.css'
var App = React.createClass({
    //react 生命周期
    getDefaultProps:function(){
        console.log(111,'getDefaultProps');
        return{
            name:'app'
        }
    },
    getInitialState:function(){
        console.log(222,'getInitialState');
        return{

        }
    },
    componentWillMount:function(){
        console.log(333,'componentWillMount');
        return{

        }
    },
    render:function(){
        console.log(444,'render');
        return(
            <div className="App">
                <h3>hello React {this.props.name}</h3>
                <ChildA/>
                <ChildB/>
            </div>
        );
    },
    componentDidMount:function(){
        //console.log(request,'request');
        request
        .get('http://101.200.129.112:9527/react1/student/')
        //.use(prefix) // Prefixes *only* this request
        //.use(nocache) // Prevents caching of *only* this request
        .end(function(err, res){
            console.log(res);
        });
        console.log(555,'componentDidMount');

    },
    componentWillReceiveProps:function(){
        console.log(666);
    },
    componentWillUpdate:function(){
        console.log(777);
    }
});

module.exports = App;

import React from 'react';
import Button from './button/index.js';
//import Input from './input/index.js';
import Table from './table/index.js';
import FormItem from './form-item/index.js';
import Card from './card/index.js';
const TitleBar = Card.TitleBar;
const Title = Card.Title;
const ContentBar = Card.ContentBar;
const Content = Card.Content;
var header = [
    {title:'name',dataIndex:'name',key:'name'},
    {title:'age',dataIndex:'age',key:'age'},
    {title:'sex',dataIndex:'sex',key:'sex'},
    {title:'adress',dataIndex:'adress',key:'adress'}
];
var data = [
    {key:'1',name:'ryan',age:27,sex:'boy', adress:'广东省广州市海珠区'},
    {key:'2',name:'star',age:32,sex:'boy', adress:'广东省广州市海珠区'},
    {key:'3',name:'yangyang',age:24,sex:'girl', adress:'广东省广州市海珠区'},
    {key:'3',name:'ning',age:24,sex:'girl', adress:'广东省广州市海珠区'},
    {key:'3',name:'ivan',age:24,sex:'boy', adress:'四川省成都市双流镇'},
];

var AntdStudy = React.createClass({
    getInitialState:function(){
        return{
            value:'请输入...',
            error : false,
            errmsgInp:'',
            errmsgPwd:'',
            pwdValue:'',
			current:1
        }
    },
    render:function(){
        return (
            <div>
                <h3>antdStudy</h3>
                <Button size='large' type='info' loading={true}>我是按钮</Button>

                <Table
                    dataSource={data}
                    columns={header}
                    onRowClick={this.handleClick}
                    page
                />
                <FormItem
                    label='姓名'
                    type='text'
                    errmsg={this.state.errmsgInp}
                    error={this.state.error}
                    value={this.state.value}
                    onChange={this.handleChangeInp}
                />
                <FormItem
                    label='密码'
                    type='password'
                    errmsg={this.state.errmsgPwd}
                    error={this.state.error}
                    value={this.state.pwdValue}
                    onChange={this.handleChangePwd}
                />
                <Card current={this.state.current}>
                    <TitleBar>
                        <Title index={1} onClick={(e)=>this.setState({current:1})}>title1</Title>
                        <Title index={2} onClick={(e)=>this.setState({current:2})}>title2</Title>
                        <Title index={3} onClick={(e)=>this.setState({current:3})}>title3</Title>
                    </TitleBar>
                    <ContentBar>
                        <Content index={1}>conternt1</Content>
                        <Content index={2}>conternt2</Content>
                        <Content index={3}>conternt3</Content>
                    </ContentBar>
                </Card>
            </div>
        )
    },
    handleCardClick:function(index){
        this.setState({
            current:index
        })
    },
    handleChangePwd:function(e){
        if(e.target.value == ''){
            this.setState({
                error:true,
                errmsgPwd:'请输入密码',
                pwdValue:e.target.value
            })
        }else {
            this.setState({
                error:false,
                pwdValue:e.target.value
            })
        }
    },
    handleChangeInp:function(e){
        if(e.target.value == ''){
			this.setState({
                error:true,
                errmsg:'请输入用户名',
                value:e.target.value
            })

        }else if(e.target.value == 'ivan'){
			this.setState({
                error:true,
                errmsgInp:'禁止输入敏感字符',
                value:e.target.value
            })
        }else {
            this.setState({
                error:false,
                value:e.target.value
            })
        }
    },
    handleChange:function(e){
        this.setState({
            value:e.target.value
        })
    },
    enter:function(e){
        alert(e.target.value)
    },
    handleClick:function(obj){
        alert(JSON.stringify(obj))
    }
})
export default AntdStudy;

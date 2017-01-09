import React from 'react';
import {Button,Col,Row,Table,Rate} from 'antd';
import 'antd/dist/antd.css'

var header=[
    {title:'name',dataIndex:'name'},
    {title:'age',dataIndex:'age'},
    {title:'sex',dataIndex:'sex'},
]

var data=[
    {name:'ryan',age:27,sex:'boy'},
    {name:'star',age:32,sex:'boy'},
    {name:'yangyang',age:24,sex:'girl'},
    {name:'ryan',age:27,sex:'boy'},
    {name:'star',age:32,sex:'boy'},
    {name:'yangyang',age:24,sex:'girl'},
    {name:'ryan',age:27,sex:'boy'},
    {name:'star',age:32,sex:'boy'},
    {name:'yangyang',age:24,sex:'girl'},
    {name:'ryan',age:27,sex:'boy'},
    {name:'star',age:32,sex:'boy'},
    {name:'yangyang',age:24,sex:'girl'},
    {name:'ryan',age:27,sex:'boy'},
    {name:'star',age:32,sex:'boy'},
    {name:'yangyang',age:24,sex:'girl'},
    {name:'ryan',age:27,sex:'boy'},
    {name:'star',age:32,sex:'boy'},
    {name:'yangyang',age:24,sex:'girl'}
]
var AntdTest = React.createClass({
    getInitialState:function(){
        return{
            loading:false
        }
    },
    render:function(){
        return (
            <div style={{padding:20}}>
                <Row>
                    <Col span={4}>
                        <Button>hello world</Button>
                    </Col>
                    <Col span={4}>
                        <Button type='primary'
                            icon={this.state.loading?'loading':null}
                            onClick={this.ajax}
                            >
                        ningyuexin
                        </Button>
                    </Col>
                    <Col span={4}>
                        <Button type='ghost'>yinfei</Button>
                    </Col>
                    <Col span={4}>
                        <Button type='ghost' icon='loading'>loading</Button>
                    </Col>
                </Row>

                <br/>
                <Row>
                    <Rate value={3}/>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Table dataSource={data} columns={header}/>
                    </Col>
                </Row>

            </div>

        )
    },
    ajax:function(){
        this.setState({
            loading: !this.state.loading
        })
    }
});
export default AntdTest;

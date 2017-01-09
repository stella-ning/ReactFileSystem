import React from 'react';
import TodoList from './to-do-list'

function id() {
    return Math.random().toString().replace(/\./,'')+'-'+Math.random().toString().replace(/\./,'')
}
var TodoMVC = React.createClass({
    getInitialState:function(){
        return{
            items : [
                {text:'ivan',id:id(),type:'active'},
                {text:'stella',id:id(),type:'no-active'},
                {text:'fei',id:id()}
            ],
            value:'inp'
        }
    },
    render:function(){
        return(
            <div className='todo-mvc'>
                <h3>todos</h3>
                <div className='edit'>
                    <input value={this.state.value} onChange={this.handleChange}/>
                    <button onClick={this.handleAdd}>提交</button>
                </div>
                <TodoList
                    items={this.state.items}
                    onDelete={this.handleDelete}
                    onEdit={this.handleEdit}
                />
            </div>
        )
    },
    handleEdit:function (obj) {
        //alert(obj.text)
        var items = this.state.items;
        items = items.map(function (o) {
            console.log(obj.id,o.id)
            if(o.id == obj.id){

                o.text = obj.text
            }
            return o
        })
        console.log(items)
        this.setState({items:items})
    },
    handleDelete:function(obj){
        var items = this.state.items,
            json = [];
        for(var i=0;i<items.length;i++){
            if(items[i].text != obj.text){
                json.push(items[i])
            }
        }
        this.setState({
            items:json
        })
    },
    handleChange:function(e){
        this.setState({
            value:e.target.value
        })
    },
    handleAdd:function(e){
        var items = this.state.items,
            text = this.state.value;
        items.push({
            text:text,
            id:id()
        });
        this.setState({
            items:items,
            value:''
        })

    }
})
module.exports = TodoMVC;

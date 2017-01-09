import React from 'react';
import StudyCon from './studyCon/index.js'
function id() {
    return Math.random().toString().replace(/\./,'')+'-'+Math.random().toString().replace(/\./,'')
}
var Study = React.createClass({
	getInitialState:function(){
		return{
			items:[
				{text:'ivan',id:id(),type:'active'},
				{text:'ning',id:id(),type:'active'},
				{text:'yue',id:id(),type:'complete'},
				{text:'xin',id:id(),type:'active'}
			],
			value:'input',
			type:'active'
		}
	},
	render:function(){
		var items = this.state.items,
            type = this.state.type;

        var json = [];
        items.map(function (obj) {
            if(obj.type == type || type == 'all'){
                json.push(obj);
            }
        })
		return(
			<div className='wrap-box'>
				<h3 className='app'>早上好</h3>
				<div className='edit'>
					<input value={this.state.value} onChange={this.handleChange}/>
					<button onClick={this.handleAdd}>提交</button>
				</div>
				<StudyCon
					items={this.state.items}
					onDelete={this.handleDelete}
					onEdit={this.handleEdit}
					onType={this.handleType}
				/>
				<p>
                    <button style={{background:this.state.type == 'all' ? 'red':'#dddddd'}} onClick={(e)=>this.setState({type:'all'})}>all</button>
                    <button style={{background:this.state.type == 'active' ? 'red':'#dddddd'}} onClick={(e)=>this.setState({type:'active'})}>active</button>
                    <button style={{background:this.state.type == 'complete' ? 'red':'#dddddd'}} onClick={(e)=>this.setState({type:'complete'})}>complete</button>
                </p>
			</div>
		)
	},
	handleType:function(obj,type){
		var items = this.state.items;
        items = items.map(function (o) {
            if(o.id == obj.id){
                o.type = type
            }
            return o
        })
        this.setState({items:items});
	},
	handleEdit:function(obj){
		var items = this.state.items;
		items = items.map(function(o){
			if(o.id == obj.id){
				o.text = obj.text
			}
			return o;
		})
		this.setState({items:items})
	},
	handleDelete:function(obj){
		var items = this.state.items,
			json = [];
			console.log(obj.id);
		for(var i=0;i<items.length;i++){
			if(items[i].text != obj.text){
				json.push(items[i]);
			}
		}
		this.setState({
			items:json
		})
	},

	handleAdd:function(e){
		var items = this.state.items,
			text = this.state.value;
		items.push({
			text:text,
			id:id()
		})
		this.setState({
			items:items,
			value:''
		})
	},
	handleChange:function(e){
		this.setState({
			value:e.target.value
		})

	}
})
module.exports = Study;

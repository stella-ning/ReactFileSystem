import React from 'react';
var StudyItem = React.createClass({
	getInitialState:function(){
		return{
			value:this.props.text
		}
	},
	render:function(){
		return(
			<li>
				{this.props.text}
				<button onClick={(e)=>this.props.delete(this.props.o)}>删除</button>
				<button onClick={(e)=>this.props.toggle(this.props.o,this.props.type == 'active' ? 'complete':'active')}>toggle-->{this.props.type}</button>
                <br/>
				<br/>
				<input value={this.state.value} onChange={this.handleChange}/>
				<button onClick={this.handleEdit}>确定</button>
				<button onClick={this.handleCancel}>取消</button>
				<br/>
				<br/>
			</li>
		)
	},
	handleCancel:function(){
		this.setState({
			value:this.props.text
		})
	},
	handleEdit:function(){
		var obj = {
			id:this.props.id,
			text:this.state.value
		}
		this.props.edit(obj)
	},
	handleChange:function(e){
		this.setState({
			value:e.target.value
		})
	}
});
var StudyCon = React.createClass({
	render:function(){
		var that = this;
		var nodes = this.props.items.map(function(o){
            return (
                <StudyItem
					type={o.type}
					id={o.id}
					o={o}
					key={o.id}
					text={o.text}
					delete={that.props.onDelete}
					edit={that.props.onEdit}
					toggle={that.props.onType}
				/>
            )
        });
		return(
			<ul>{nodes}</ul>
		)
	}
})
module.exports = StudyCon;

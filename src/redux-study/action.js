import React from 'react';
import ReactDOM from 'react-dom'

const Todo = React.createClass({

	render(){
		const {items,name,dispatch,active} = this.props
		if(active == 'all'){
			var nodes = items.map((obj,id)=>{
				return (
					<p key={id}>
						<span  onClick={(e)=>dispatch({type:'active-item',text:obj.name})} style={{textDecoration:!obj.active?'line-through':''}}>{obj.name}</span>
						<button onClick={(e)=>this.handleDelete(obj.name)}>删除</button>
					</p>
				)
			})
		}
		if(active == 'active'){
			var nodes = items.map((obj,id)=>{
			   return obj.active ?  (
					<p key={id}>
						<span onClick={(e)=>dispatch({type:'active-item',text:obj.name})} style={{textDecoration:!obj.active?'line-through':''}}>{obj.name}</span>
						<button onClick={(e)=>this.handleDelete(obj.name)}>删除</button>
					</p>
				) : null
			})
		}
		if(active == 'complete'){
			var nodes = items.map((obj,id)=>{
				return !obj.active ?  (
					<p key={id}>
						<span  onClick={(e)=>dispatch({type:'active-item',text:obj.name})} style={{textDecoration:!obj.active?'line-through':''}}>{obj.name}</span>
						<button onClick={(e)=>this.handleDelete(obj.name)}>删除</button>
					</p>
				) : null
			})
		}
		return(
			<div>
				<input ref="input"/><button onClick={this.handleClick}>增加</button>

				<ul>
					{nodes}
				</ul>
				<div>
                    <button onClick={(e)=>dispatch({type:'active',value:'all'})}>all</button>--
                    <button onClick={(e)=>dispatch({type:'active',value:'active'})}>active</button>--
                    <button onClick={(e)=>dispatch({type:'active',value:'complete'})}>complete</button>
                </div>
			</div>
		)
	},
	handleDelete(name){
        const {dispatch} = this.props
        dispatch({
            type:'remove',
            text:name
        })
    },
    handleClick(e){
        const {dispatch} = this.props
       var value = ReactDOM.findDOMNode(this.refs.input).value
        dispatch({
            type:'add',
            text:value
        })
    }
})

export default Todo

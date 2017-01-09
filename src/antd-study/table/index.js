import React from 'react';
import './index.css'


var Table = React.createClass({
    getInitialState:function(){
        return{
            className:'',
			name:''
        }
    },
    render:function(){
        var that = this;
        var header = this.props.columns,
            data = this.props.dataSource;
        var arr = [];
        var headerNodes = header.map(function(obj){
            arr.push(obj.key);
            return(
                <td key={obj.key}>{obj.title}</td>
            )
        });
        var nodes = data.map(function (obj,i) {
            //console.log(arr)
            var tr =  arr.map(function (h,j) {
                return (
                    <td key={'td-'+obj[h]+'-'+j}>{obj[h]}</td>
                )
            })
            return (
                <tr onClick={(e)=>that.props.onRowClick(obj)} className="tr" key={'tr-'+i}>{tr}</tr>
            )
        });
        var page = null;
        if(this.props.page){
            page =  (
                <p className='pages'>
                    <a  href="javascript:;"
                    className={this.state.className}
                    onClick={that.handleClick} >&lt;</a>
                    <a  href="javascript:;"
                    className='active'
                    onClick={that.handleClick}>1</a>
                    <a  href="javascript:;"
                    className={this.state.className}
                     onClick={that.handleClick}
                     >2</a>
                    <a  href="javascript:;"
                    className={this.state.className}
                     onClick={that.handleClick}>3</a>
                    <a  href="javascript:;"
                    className={this.state.className}
                    onClick={that.handleClick}>&gt;</a>
                </p>
            )
        }
        return(
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            {headerNodes}
                        </tr>
                    </thead>
                    <tbody>
                            {nodes}
                    </tbody>
                </table>
                {page}
            </div>

        )
    },
    handleClick:function(obj){
        console.log(obj);
        if(obj.className == ''){
            this.setState({
                className:'active'
            })
        }

    }

})

export default Table;

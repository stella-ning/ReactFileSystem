import React from 'react';
import'./index.css';
var ChildB = React.createClass({
    render(){
        return(
            <div className='child-a'>
                my name is childB
            </div>
        );

    }
})
module.exports=ChildB;

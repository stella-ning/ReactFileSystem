import React from 'react';

import {Provider,connect} from 'react-redux';
import {createStore,compose} from 'redux';
import Container from './container.js';
import Reducer from './reducer';

var store = createStore(Reducer,compose(
	window.devToolsExtension()
))

var ReduxS = React.createClass({

	render(){
		return(
			<Provider store={store}>
				<Container/>
			</Provider>
		)
	}
})

export default ReduxS;

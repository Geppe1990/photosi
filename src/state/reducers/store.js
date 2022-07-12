import { createStore, applyMiddleware } from 'redux';
import reducers from './index';
import thunk from 'redux-thunk';

export const store = createStore(
	reducers,
	{
		filter: {
			name: '',
			category: '',
			color: '',
			size: ''
		}
	},
	applyMiddleware(thunk)
);

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
		},
		products: ([
			{
				name: "Nome 1",
				color: "Rosso",
				size: "Large",
				category: "Scarpe",
				code: "123",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus unde voluptatibus eius eos aspernatur fuga cum maiores inventore? Omnis itaque debitis illum at laudantium nostrum fuga accusantium error iusto aut?"
			}, {
				name: "Nome 2",
				color: "Verde",
				size: "Medium",
				category: "Pantaloni",
				code: "456",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus unde voluptatibus eius eos aspernatur fuga cum maiores inventore? Omnis itaque debitis illum at laudantium nostrum fuga accusantium error iusto aut?"
			}, {
				name: "Nome 3",
				color: "Rosso",
				size: "Small",
				category: "Scarpe",
				code: "789",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus unde voluptatibus eius eos aspernatur fuga cum maiores inventore? Omnis itaque debitis illum at laudantium nostrum fuga accusantium error iusto aut?"
			}, {
				name: "Nome 14",
				color: "Verde",
				size: "Small",
				category: "Pantaloni",
				code: "012",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus unde voluptatibus eius eos aspernatur fuga cum maiores inventore? Omnis itaque debitis illum at laudantium nostrum fuga accusantium error iusto aut?"
			}, {
				name: "Nome 25",
				color: "Rosso",
				size: "Medium",
				category: "Scarpe",
				code: "345",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus unde voluptatibus eius eos aspernatur fuga cum maiores inventore? Omnis itaque debitis illum at laudantium nostrum fuga accusantium error iusto aut?"
			}, {
				name: "Nome 6",
				color: "Verde",
				size: "Large",
				category: "Scarpe",
				code: "678",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus unde voluptatibus eius eos aspernatur fuga cum maiores inventore? Omnis itaque debitis illum at laudantium nostrum fuga accusantium error iusto aut?"
			}
		])
	},
	applyMiddleware(thunk)
);

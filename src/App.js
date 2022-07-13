import React from 'react';
import { Route, Routes } from "react-router-dom";
import List from './components/list/list';
import Product from './components/product/product';
import Insert from './components/insert/insert';
import Navbar from './components/navbar/navbar';
import './App.css';
import 'bulma/css/bulma.min.css';

function App() {
  return (
	<>
		<Navbar />
		<Routes>
			<Route exact path="/" element={<List />} />
			<Route exact path="/:id" element={<Product />} />
			<Route path="/create" element={<Insert />} />
			<Route path="/edit/:id" element={<Insert />} />
		</Routes>
	</>
  );
}

export default App;

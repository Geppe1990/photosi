import React from 'react';
import { Route, Routes } from "react-router-dom";
import List from './components/list/list';
import './App.css';
import 'bulma/css/bulma.min.css';

function App() {
  return (
	<>
		<Routes>
			<Route exact path="/" element={<List />} />
			{/* <Route path="/create" element={<Create />} />
			<Route path="/search" element={<Search />} /> */}
		</Routes>
	</>
  );
}

export default App;

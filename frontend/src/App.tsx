import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.page';
import Products from './pages/products/Products.page';
import AddPproduct from './pages/add-product/AddPproduct.page';
import DeleteProduct from './pages/delete-product/DeleteProduct.page';
import EditProduct from './pages/edit-product/EditProduct.page';

const App: React.FC = () => {
	return (
		<div>
			{/* Navbar */}
			<Navbar />
			{/* Wrapper */}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products'>
					<Route index element={<Products />} />
					<Route path='add' element={<AddPproduct />} />
					<Route path='edit/:id' element={<EditProduct />} />
					<Route path='delete/:id' element={<DeleteProduct />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;

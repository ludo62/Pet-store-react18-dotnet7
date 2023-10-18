import React from 'react';
import './delete-product.scss';

import { IProduct } from '../../types/global.typing';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { baseUrl } from '../../constants/url.constant';

const DeleteProduct = () => {
	const redirect = useNavigate();
	const { id } = useParams();

	const handleDeleteBtnClick = () => {
		axios
			.delete(`${baseUrl}/${id}`)
			.then((resposne) =>
				redirect('/products', { state: { message: 'Produit supprimé avec succès !' } })
			)
			.catch((error) => alert('Error'));
	};

	const handleBackBtnClick = () => {
		redirect('/products');
	};

	return (
		<div className='delete-product'>
			<h2>Supprimer le produit</h2>
			<h4>Êtes-vous sûr de vouloir supprimer ce produit ?</h4>

			<div>
				<Button variant='outlined' color='error' onClick={handleDeleteBtnClick}>
					Oui Supprimez-le
				</Button>
				<Button variant='outlined' color='secondary' onClick={handleBackBtnClick}>
					Retour
				</Button>
			</div>
		</div>
	);
};

export default DeleteProduct;

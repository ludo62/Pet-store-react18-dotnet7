import './home.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import kitten from '../../assets/kitten.jpg';

const Home = () => {
	const redirect = useNavigate();
	return (
		<div className='home'>
			<h1>Bienvenue dans la boutique pour animaux</h1>
			<Button variant='outlined' color='primary' onClick={() => redirect('/products')}>
				Liste des produits
			</Button>
			<img src={kitten} alt='kitten' />
		</div>
	);
};

export default Home;

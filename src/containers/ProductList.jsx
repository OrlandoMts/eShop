import React from 'react';
import { ProductItem } from '../components/ProductItem';
import '../styles/containersStyle/ProductList.scss';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {

	const [ products, setProducts] = React.useState([]);
	React.useEffect( async ()=>{
		const response = await axios(API);
		setProducts(response.data)
	},[]);

    return (
        <section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem />
				))}
			</div>
		</section>
    )
}

export { ProductList }

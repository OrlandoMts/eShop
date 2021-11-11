import React from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/componentsStyle/ProductItem.scss';
import add_cart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	const [ addToCart ] = React.useContext(AppContext);

	const handleClick = itemProduct => {
		addToCart(itemProduct)
	}

    return (
        <div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<div onClick={()=>handleClick(product)}>
					<img src={add_cart} alt="add car" />
				</div>
			</div>
		</div>
    )
}

export { ProductItem }

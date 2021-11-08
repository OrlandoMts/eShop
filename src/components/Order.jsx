import React from 'react';
import '../styles/componentsStyle/Order.scss';

const Order = () => {
    return (
        <div className="Order">
			<p>
				<span>06.11.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src="./icons/flechita.svg" alt="arrow" />
		</div>
    )
}

export { Order }

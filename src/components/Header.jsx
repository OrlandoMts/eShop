import React from 'react';
import '../styles/componentsStyle/Header.scss';
import { Menu } from '@components/Menu';

import icon_menu from '@icons/icon_menu.svg';
import logo_yard_sale from '@logos/logo_yard_sale.svg';
import icon_shopping from '@icons/icon_shopping_cart.svg';

const Header = () => {

    const [ toggle, setToggle ] = React.useState(false);

    const handleToggle = () => {
        console.log('hola');
        setToggle(!toggle);
    }

    return (
        <nav>
            <img src={icon_menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo_yard_sale} alt="logo" className="logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        orlandomontes97@outlook.com
                    </li>
                    <li className="navbar-shopping-cart">
                        <img src={icon_shopping} alt="shopping cart" />
                        <div>2</div>
                    </li>
                </ul>
            </div>
            {/* Si toggle es false no se va a mostrar */}
            {toggle && <Menu />}
            
    </nav>
    )
}

export { Header }
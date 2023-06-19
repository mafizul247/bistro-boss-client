import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';

const Menu = () => {
    // useTitle('Menu')
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* Main Covered  */}
            <Cover img={menuImg} title='Our Menu' />
            <SectionTitle subHeading="Don't Miss" heading='Todays Offer' />
            {/* Offer Items  */}
            <MenuCategory items={offered} />
            {/* Desserts Items  */}
            <MenuCategory items={desserts} title='dessert' img={dessertImg} />
            {/* Pizza Items  */}
            <MenuCategory items={pizza} title='pizza' img={pizzaImg} />
            {/* Salad Items  */}
            <MenuCategory items={salad} title='salad' img={saladImg} />
            {/* Soup Items  */}
            <MenuCategory items={soup} title='soup' img={soupImg} />
        </div>
    );
};

export default Menu;
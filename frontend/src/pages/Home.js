import React from 'react';
import Slide from '../Elements/Slide';
import ProDivC from '../Elements/ProDivC';
import ProductsC from '../Elements/ProductsC';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const DisCard = ({ title }) => {
    return (
        <Link to={`/Shop/?cg=${title}`} className="cardscg">
            <div>
                <h1>{title}</h1>
            </div>
        </Link>
    );
};

const Home = () => {
    return (
        <>
            <Helmet>
                <title>MasterTech</title>
            </Helmet>
            <div>
                <Slide />
                <ProDivC />
                <ProductsC />
            </div>
        </>
    );
};

export default Home;

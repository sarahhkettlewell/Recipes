import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (

<div className='homepage'>
    <div className='directory-menu'>
        <div className='recipe-item'>
            <div className='recipe'>
                <h1 className='title'>CURRY</h1>
                <span className='subtitle'>RECIPES</span>
            </div>
        </div>
        <div className='recipe-item'>
            <div className='recipe'>
                <h1 className='title'>MEAT DISHES</h1>
                <span className='subtitle'>RECIPES</span>
            </div>
        </div>
        <div className='recipe-item'>
            <div className='recipe'>
                <h1 className='title'>FISH</h1>
                <span className='subtitle'>RECIPES</span>
            </div>
        </div>
        <div className='recipe-item'>
            <div className='recipe'>
                <h1 className='title'>SIDES</h1>
                <span className='subtitle'>RECIPES</span>
            </div>
        </div>
        <div className='recipe-item'>
            <div className='recipe'>
                <h1 className='title'>DESSERT</h1>
                <span className='subtitle'>RECIPES</span>
            </div>
        </div>
    </div>
</div>
);

export default HomePage;
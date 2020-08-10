import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (

<div className='homepage'>
    <div className='directory-menu'>
        <div className='recipe-item'>
            <div className='recipe'>
                <h1 className='title'>CURRY Dishes</h1>
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
                <h1 className='title'>FISH DISHES</h1>
                <span className='subtitle'>RECIPES</span>
            </div>
        </div>
        <div className='recipe-item'>
            <div className='recipe'>
                <h1 className='title'>SIDE DISHES</h1>
                <span className='subtitle'>RECIPES</span>
            </div>
        </div>
        <div className='recipe-item'>
            <div className='recipe'>
                <h1 className='title'>DESSERTS</h1>
                <span className='subtitle'>RECIPES</span>
            </div>
        </div>
    </div>
</div>
);

export default HomePage;
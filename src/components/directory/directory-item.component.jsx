import React from 'react';

import RecipeItem from '../recipe-item/recipe-item.component';

import './directory-item.styles.scss';

class Directory extends React.Component {
    constructor () {
        super();

        this.state = {
            sections: [{
                title: 'curry',
                imageUrl:'https://i.imgur.com/vixekMk.jpg',
                size: 'large',
                id: 1
            },
            {
                title: 'meat',
                imageUrl: 'https://i.imgur.com/F11C1e1.jpg?1',
                size: 'large',
                id: 2
            },
            {
                title: 'fish',
                imageUrl: 'https://i.imgur.com/KHUGdjn.jpg',
                size: 'large',
                id: 3
            },
            {
                title: 'side',
                imageUrl: 'https://i.imgur.com/D3CrNAi.jpg',
                id: 4
            },
            {
                title: 'desserts',
                imageUrl: 'https://i.imgur.com/fImBltx.jpg?3',
                id: 5
            }]
        }
    }

    render() {
        return (
           <div className='directory-menu'>
               {this.state.sections.map(({ title, imageUrl, id, size}) => (
                    <RecipeItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                   ))}
           </div> 
        );
    }
}

export default Directory;
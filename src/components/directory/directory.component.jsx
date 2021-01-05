import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {

    constructor()
    {
        super();

        this.state = {

            sections: [{

                title: 'hats',
                imageUrl: 'https://images.unsplash.com/photo-1531399395381-6603d3b9899f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                id: 1
            },
            {    
                title: 'jackets',
                imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',
                id: 2
            },
            {    
                title: 'watches',
                imageUrl: 'https://oracleoftime.com/wp-content/uploads/2019/12/Adventure-Watches99.jpg',
                id: 3
            },
            {    
                title: 'mens',
                imageUrl: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                id: 4,
                size : 'large'
            },
            {

                title: 'womens',
                imageUrl: 'https://media.istockphoto.com/photos/summer-womens-fashion-clothes-set-moms-jeans-suede-sneakers-cotton-picture-id1131409615?k=6&m=1131409615&s=612x612&w=0&h=jxKe9n70klayZpaO08EwvciPDHuk57hxnvFJoB_BURM=',
                id: 5,
                size: 'large'
                
            }]
            

        }
    }

    render() {
        return (

        <div className='directory-menu'>
            {
                this.state.sections.map(({ title, imageUrl, id , size }) => (
                    <MenuItem key={id} title={title} imageUrl= {imageUrl} />

                ))
            }
            
        </div>
        );
    }

    
}

export default Directory;
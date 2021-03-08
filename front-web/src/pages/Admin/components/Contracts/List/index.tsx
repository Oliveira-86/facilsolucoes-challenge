import React from 'react';
import Card from '../Card';
import './styles.scss';

const List = () => {
    return (
        <div className="admin-contracts-list">
            <div className="admin-list-container">
               <Card />
               <Card />
               <Card />
            </div>

        </div>
    );
}

export default List;
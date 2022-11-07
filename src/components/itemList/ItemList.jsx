import React from 'react'
import './itemList.css'
import { Item } from '../item/Item';

export const ItemList = ({products}) => {
    return (
        <div className='cards'>
            {
                products.map(elem => {
                    return (
                        <Item key={elem.id} product={elem} />
                    )
                })
            }
        </div>
    )
}

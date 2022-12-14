import products from '../utils/products'
import { useEffect, useState } from 'react';
import customFetch from '../utils/customFetch'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {

    const [infoItem, setInfoItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
            customFetch(2000, products.filter(item => {
                if(id === undefined) return item;
                return item.categoryId === parseInt(id)
            }))

            .then(result => setInfoItem(result))
            .catch(err => console.log(err))
        }, [infoItem])
    
    return(
        <>
            <div className='containerItemsStyle'> 
                <ItemList items={infoItem} />
            </div> 
        </>
    )
}

export default ItemListContainer;
// import products from '../utils/products'
import { useEffect, useState } from 'react';
// import customFetch from '../utils/customFetch'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { db } from '../utils/firebaseCfg'
import { collection, getDocs, query, where } from "firebase/firestore"; 

const ItemListContainer = () => {

    const [infoItem, setInfoItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchFirestore = async() =>{

            let q;

            if(id) {
                q= query(collection(db,"products"), where('categoryId', '==', parseInt(id)))
            }else{
                q = query(collection(db, "products"))
            }

            const querySnapshot = await getDocs(q);
            const dataFirestore = querySnapshot.docs.map(item => ({
                id:item.id,
                ...item.data()
            }))
            return dataFirestore;
            }
            fetchFirestore()
                .then(result => setInfoItem(result))
                .catch(err => console.log(err))
        })
        
    
    return(
        <>
            <div className='containerItemsStyle'> 
                <ItemList items={infoItem} />
            </div> 
        </>
    )
}

export default ItemListContainer;
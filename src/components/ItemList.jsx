import Item from './Item';
import Spinner from 'react-bootstrap/Spinner';

const ItemList = ({ items }) => {
    
    return(
        
    <>
        {
            items && items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} name={item.name} cost={item.cost} pictureUrl={item.image[0]} stock={item.stock} />)
            : <Spinner animation="border" variant="light" />
        }
       
    </>
    )
}

export default ItemList;

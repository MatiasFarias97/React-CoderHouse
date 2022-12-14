
import Spinner from 'react-bootstrap/Spinner';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) =>{
    return(
        <div> 
            {
               item && item.image
               ? 
                <div className="container-fluid d-flex containerItemDetail gridItemDetail">
                    <img src={item.image} className="imgItemDetail"></img>
                    <div className="textItemDetail">
                        <h2>{item.name}</h2>
                        <h3>{item.description}</h3>
                        <p>{item.cost}</p>
                    </div>

                    <ItemCount/>
                </div>
                : <Spinner animation="border" variant="light" />
            }
        </div>
    )
}

export default ItemDetail;
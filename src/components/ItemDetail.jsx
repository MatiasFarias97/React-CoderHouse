
import Spinner from 'react-bootstrap/Spinner';

const ItemDetail = ({ item }) =>{
    return(
        <> 
            {
               item && item.image
               ? 
                <div className="container-fluid d-flex containerItemDetail">
                    <img src={item.image} className="imgItemDetail"></img>
                    <div className="textItemDetail">
                        <h2>{item.name}</h2>
                        <h3>{item.description}</h3>
                        <p>{item.cost}</p>

                    </div>
                </div>
                : <Spinner animation="border" variant="light" />
            }
        </>
    )
}

export default ItemDetail;
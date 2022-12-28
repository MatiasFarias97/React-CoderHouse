import { useContext, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2'



const ItemDetail = ({ item }) =>{

    const [itemCount, setItemCount] = useState(0)
    const { addItemButton } = useContext(CartContext)

    const onAdd = (qty) => {

      
        Swal.fire({
            icon: "success",
            title: "Se agrego al carrito",
            text: `Selecciono ${qty} item`,
            confirmButtonText: "Continuar"
        })
     
        setItemCount(qty)

        addItemButton(item, qty)

    }

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
                        <p>${item.cost}</p>
                    </div>

                    <ItemCount start={0} stock={item.stock} onAdd={onAdd}/>
                </div>
                : <Spinner animation="border" variant="light" />
            }
        </div>
    )
}

export default ItemDetail;
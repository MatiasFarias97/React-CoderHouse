import { useContext, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';



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
        <>
        <div className='containerBtnCheckout'>
            <Link to='/cart' className='btnCheckout btn btn-warning'>VER CARRITO</Link>
        </div>

        <div className=''> 
            {
               item && item.image
               ? 
                <div className="container-fluid d-flex containerInfoItem row">
                    <img src={item.image} className="imgItemDetail col"></img>
                    <div className="textItemDetail col">
                        <h2>{item.name}</h2>
                        <h3>{item.description}</h3>
                        <p>${item.cost}</p>
                    </div>
                    <div className='itemDetailBtns col'>
                    <ItemCount start={0} stock={item.stock} onAdd={onAdd}/>
                    </div>
                </div>
                : <Spinner animation="border" variant="light" />

            }
        </div>
        </>
    )
}

export default ItemDetail;
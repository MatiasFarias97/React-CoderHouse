import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {

    const { cartList } = useContext(CartContext)

    return(
       <>
            <h1 className="textWhite h1Cart">Tu carrito</h1>
            <ul className="textWhite">
            {
                cartList.length === 0
                ? <p>Tu carrito esta vacio</p>
                : cartList.map(item => 
                <li className="cartItem row" key={item.id}><img src={item.image} alt=""/> 
                    <h2 className="col">{item.name}</h2> 
                    <p className="col">cantidad: {item.quantity}</p>
                    <p className="col">Total ${item.cost*item.quantity}</p>
                </li>)
            }
            </ul> 
       </> 
    )
}

export default Cart;
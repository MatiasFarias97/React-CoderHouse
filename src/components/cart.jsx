import { useContext } from "react";
import { CartContext } from "./CartContext";
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import { db } from '../utils/firebaseCfg'
import Swal from 'sweetalert2'
import { AiOutlineFrown } from "react-icons/ai";

const Cart = () => {

    const { cartList, deleteItem } = useContext(CartContext)
    
    //Suma total del carrito
    let totalAmount = 0
    let sum = cartList.map(item => item.cost * item.quantity)
        
    for(let i = 0; i < sum.length; i++){
        totalAmount += sum[i]
    }

    const test = useContext(CartContext)


    //Crear el pedido
    const createOrder = () => {
        const order = {
            buyer: {
                name: 'Leo Messi',
                email: 'tute@gmail.com',
                phone: '3512068566'
            },
            date: serverTimestamp(),
            items: test.cartList.map(item =>({
                id: item.id,
                title: item.name,
                price:  item.cost,
                qty: item.quantity
            })),
            total: totalAmount
        }

        const createOrderDb = async () =>{
            const newOrderId = doc(collection(db, "orders" ))
            await setDoc(newOrderId, order);
            return newOrderId
        }

        createOrderDb()
            .then(result => { Swal.fire({
            icon: "success",
            title: "Su orden fue creada con exito",
            text: `El codigo para retira la compra es "${result.id}"`,
            confirmButtonText: "Continuar"
        })
            // Actualizar stock
            test.cartList.forEach(async(item) => {

                const itemRef = doc(db, "products", item.id);
                await updateDoc(itemRef, {
                stock: increment(-item.quantity)
                });

            })
            //Vaciar carrito
            test.clear()
        }) 
            .catch(err => console.log(err))
    }
   
    return(
       <div className="d-flex flex-column justify-content-center">
        <div className="my-3 containerCartItem">
                <ul className="textWhite">
                {
                    cartList.length === 0
                    ? <p className="flex-column">TU CARRITO ESTA VACIO <AiOutlineFrown/></p>
                    : cartList.map(item => 
                    <li className="cartItem row" key={item.id}><img src={item.image} alt=""/> 
                        <h2 className="col">{item.name}</h2> 
                        <p className="col">Cantidad: {item.quantity}</p>
                        <p className="col">Total ${item.cost*item.quantity}</p>
                        <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>ELIMINAR</button>
                    </li>)     
                }
                </ul> 
            </div>
            <div className="btnGroup">
                <p className="textWhite totalAmount">Total: ${totalAmount}</p>
                <button className="btn btn-success" onClick={createOrder}>Finalizar compra</button>
            </div>
       </div> 
    )
}

export default Cart;
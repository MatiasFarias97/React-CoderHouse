import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const deleteItem = (id) => {
        const  arrayDeleteItem = cartList.filter(item => item.id !== id)
        setCartList(arrayDeleteItem)
    }

    const clear = () =>{
        let newArray = [...cartList]
        newArray.length = 0
        setCartList(newArray)
    }
   

    const addItemButton = (item, qty) => {

        const listFilter = cartList.filter(cart => cart.id === item.id);
        const keys = Object.keys(cartList);

        if (listFilter.length > 0) {

            let cartListNewArray = [...cartList]
            const keyCart = keys.filter(key => cartList[key].id === item.id);
            let cartListToEdit = { ...cartListNewArray[keyCart] };
            cartListToEdit.quantity += qty 
            cartListNewArray[keyCart] = cartListToEdit
            setCartList(cartListNewArray) 
        
    } else {
        
        setCartList([
            ...cartList,
            {
                id: item.id,
                name: item.name,
                image: item.image,
                cost: item.cost,
                quantity: qty
                
            }
        ])
        }
    }


    return(
        <CartContext.Provider value={{cartList, addItemButton, deleteItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
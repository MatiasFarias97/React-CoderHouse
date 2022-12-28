import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addItemButton = (item, qty) => {

        if(cartList.includes(item)){

            console.log('eerr');
            
        
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
        <CartContext.Provider value={{cartList, addItemButton}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
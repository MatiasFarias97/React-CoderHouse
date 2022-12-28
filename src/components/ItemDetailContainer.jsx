import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../utils/firebaseCfg'



const ItemDetailContainer = () =>{

    const [dato, setDato] = useState({})
    const { idItem } = useParams()
    
    useEffect(() => {
       
       const fetchItemDetailDb = async () => {

        const docRef = doc(db,"products", idItem)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()){
            return {
                id: idItem,
                ...docSnap.data()
            }
        } else { 
            console.log("no hay doc");
        }

    }
        fetchItemDetailDb()
            .then(result => setDato(result))
            .catch (err => console.log(err))
}, [])

    return(
        <>
            <ItemDetail item={dato}/>
        </>
    )
}

export default ItemDetailContainer
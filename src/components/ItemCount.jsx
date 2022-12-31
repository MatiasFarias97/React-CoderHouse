import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useEffect, useState } from 'react';



const ItemCount = ({start,stock,onAdd}) =>{

    const [count, setCount] = useState(start)

    useEffect(() => {
        setCount(start)
    }, [])


    const increment = () => {
        
        if(count < stock){
                        
            setCount(count + 1);
    }
}

    const decrement = () => {
        if(count > start){
                        
            setCount(count - 1);
        }
    }

  return (
    <div className='itemCount'>
        <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={decrement}> - </Button>
            <span className='numberCount'>{count}</span>
            <Button variant="primary" onClick={increment}> + </Button>
        </ButtonGroup>  
        {
            stock
            
            ?  <div> <Button variant="primary" onClick={() => onAdd(count)}> AGREGAR AL CARRITO </Button> </div>
            : <p>No hay stock</p>
        }
    </div>

  );

 
}

// ?  <button onClick={() => onAdd(count)}>Agregar al carrito</button>

export default ItemCount;
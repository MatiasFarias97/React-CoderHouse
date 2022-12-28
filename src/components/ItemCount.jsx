import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


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
            <Button variant="light" onClick={decrement}> - </Button>
            <span className='numberCount'>{count}</span>
            <Button variant="light" onClick={increment}> + </Button>
        </ButtonGroup>  
        {
            stock
            ?  <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            : <p>No hay stock</p>
        } 
    </div>

  );

 
}



export default ItemCount;
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useEffect, useState } from 'react';

const ItemCount = (start = 0) =>{

    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(start)
    }, [])

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

  return (
    <div className='itemCount'>
        <ButtonGroup aria-label="Basic example">
            <Button variant="light" onClick={increment}> - </Button>
            {/* <span className='numberCount'>{count}</span> */}
            <Button variant="light" onClick={decrement}> + </Button>
        </ButtonGroup>   
        <button>Agregar al carrito</button>
    </div>

  );

}



export default ItemCount;
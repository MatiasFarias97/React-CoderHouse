import { BsCart2 } from 'react-icons/bs';
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {

    return(
        <div className='divCart'>
          <BsCart2  className='cart'/>
          <Badge bg="info">9</Badge>
        </div>
    )
}

export default CartWidget;
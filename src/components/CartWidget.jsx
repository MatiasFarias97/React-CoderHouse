import { BsCart2 } from 'react-icons/bs';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    return(
        <div className='divCart'>
          <Link to={'./cart'}>
            <BsCart2  className='cart'/>
            <Badge bg="info">9</Badge>
          </Link>
        </div>
    )
}


export default CartWidget;
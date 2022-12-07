import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'

const Item = ({ id, name, stock, price, pictureUrl }) => {
    return(
      
      <Card className='cardStyle'>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title><strong>{name}</strong></Card.Title>
        <Card.Text>
          {price}
        </Card.Text>
        <Link to={`/item/${id}`} className="btn btn-primary">Detalles</Link>
      </Card.Body>
    </Card>
      
    )
    
}

export default Item;
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Tv from './img/tvservice.png'
import Broadband from './img/broadband.png'
import Leaseline from './img/leaseline.png'
import { Container } from 'react-bootstrap';

function CardInfo() {
  return (
    <Container id='services'>
      <h1>Our Services</h1>
      <CardGroup className='my-5 ' >
        <Card style={{border:"none"}}>
          <Card.Img variant="top" src={Tv} />
          <Card.Body>
            <Card.Title>Digital Cable TV</Card.Title>
            <Card.Text>
              <p>With our partnerships with various MSOs, we provide more than 300 Standard and HD channels at a lower cost than DTH.</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{border:"none"}}>
          <Card.Img variant="top" src={Broadband} />
          <Card.Body>
            <Card.Title>High Speed Internet</Card.Title>
            <Card.Text>
              <p> Users get lightning-fast Internet , which offers speeds of up to 300 Mbps at an incredibly low cost.</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{border:"none"}}>
          <Card.Img variant="top" src={Leaseline} />
          <Card.Body>
            <Card.Title>Leased Line for Business</Card.Title>
            <Card.Text>
              <p> We also provide leased-Line connection for Large Enterprise</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default CardInfo;
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
        <Card>
          <Card.Img variant="top" src={Tv} />
          <Card.Body>
            <Card.Title>Digital Cable TV</Card.Title>
            <Card.Text>
              With our partnerships with various MSOs, we provide more than 300 Digital and HD channels at a lower cost than DTH.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={Broadband} />
          <Card.Body>
            <Card.Title>High Speed Internet</Card.Title>
            <Card.Text>
              Users get lightning-fast Internet , which offers speeds of up to 400 Mbps at an incredibly low cost.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={Leaseline} />
          <Card.Body>
            <Card.Title>Leased Line for Business</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default CardInfo;
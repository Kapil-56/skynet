import { Carousel, Row, Col, Container } from 'react-bootstrap';
import img1 from './img/img1.png'
import img0 from './img/img0.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'

function Carousal() {
  return (
    <Carousel id='home' className='mt-5 '>
      <Carousel.Item interval={5000} >
        <Row className='my-5 d-flex flex-column flex-lg-row justify-content-around'>
          <Col>
            <Container >
              <img
                className="d-block mt-4 w-100"
                src={img0}
                style={{maxHeight:"70vh"}}
                alt="First slide"
              />
            </Container>
          </Col>
          <Col>
            <Container>
              <img
                className="d-block  w-100"
                src={img1}
                style={{maxHeight:"70vh"}}
                alt="First slide"
              />
            </Container>
          </Col>
        </Row>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <Row className='my-5 d-flex flex-column flex-lg-row justify-content-around'>
          <Col>
            <Container>
              <img
                className="d-block mt-4 w-100"
                src={img2}
                style={{maxHeight:"70vh"}}
                alt="Second slide"
              />
            </Container>
          </Col>
          <Col>
          <Container>
              <img
                className="d-block w-100"
                src={img3}
                style={{maxHeight:"70vh"}}
                alt="Second slide"
              />
            </Container>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;
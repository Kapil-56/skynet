import { Container, Row,Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
    return (
        <Container className='my-5 py-5' >
            <Row className='py-3 align-items-center d-flex flex-column flex-lg-row justify-content-around' style={{minHeight:"380px"}}>
                <Col style={{margin:"auto"}}><p style={{fontFamily:"'League Spartan', sans-serif",textAlign:"center"}}>FREQUENTLY ASKED QUESTIONS</p></Col>
                <Col>
                    <Accordion flush >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><p className='m-0' style={{ color: "#5271fd", fontWeight: "600" }}>How much time does it takes for the installation?</p></Accordion.Header>
                            <Accordion.Body>
                                It usually takes around 15 to 20 min in most of the cases but there may be a slight difference depending on your locality.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" >
                            <Accordion.Header ><p className='m-0' style={{ color: "#5271fd", fontWeight: "600" }}>Are there any security charges?</p></Accordion.Header>
                            <Accordion.Body>
                                Yes,an amount of rupees 2000 is charged for the modem which is refundable when you return the modem.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" >
                            <Accordion.Header ><p className='m-0' style={{ color: "#5271fd", fontWeight: "600" }}>What are modes of payment accepted?</p></Accordion.Header>
                            <Accordion.Body>
                                We accept payment in Cash,UPI and NetBanking
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}

export default FAQ;
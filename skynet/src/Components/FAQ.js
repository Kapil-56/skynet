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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" >
                            <Accordion.Header ><p className='m-0' style={{ color: "#5271fd", fontWeight: "600" }}>Are there any security charges?</p></Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" >
                            <Accordion.Header ><p className='m-0' style={{ color: "#5271fd", fontWeight: "600" }}>What are modes of payment accepted?</p></Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}

export default FAQ;
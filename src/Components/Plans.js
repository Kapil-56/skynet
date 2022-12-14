import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Togglee from './Toggle';


function Plans() {
    return (
        <Container id='plans' className='my-5' >
            {/* <h1>Plans</h1> */}
            <Row style={{ minHeight: "500px" }} >
                <Col className='p-3' md={6} >
                    <h3 style={{ color: "#5271fd" }}>Price List</h3>
                    <h2>WE GIVE YOU THE BEST PRICE</h2>
                    <p>We work on a <span className='text-warning'><strong>"NO SURPRISE"</strong></span> policy. No unexpected bills. No budget blow-outs. No missed deadlines. No broken promises. No shoddy service.</p>
                </Col>
                <Col className='p-3'>
                    <Togglee />
                </Col>
            </Row>
        </Container>
    )
}

export default Plans
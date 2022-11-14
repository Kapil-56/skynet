import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Plans() {
    return (
        <Container id='plans' className='my-5' >
            {/* <h1>Plans</h1> */}
            <Row style={{ minHeight: "500px" }} className='d-flex flex-column flex-lg-row justify-content-around align-items-end align-content-center justify-content-around mx-1'>
                <Col className='p-3' >
                    <h3 style={{ color: "#5271fd" }}>Price List</h3>
                    <h2>WE GIVE YOU THE BEST PRICE</h2>
                    <p>We work on a ‘no surprises’ policy. No unexpected bills. No budget blow-outs. No missed deadlines. No broken promises. No shoddy service.</p>
                </Col>
                <Col className='p-3' style={{ backgroundColor: "#5271fd", borderTopLeftRadius: "30px", borderBottomRightRadius: "30px" }}>
                    <h3 style={{ fontSize: "x-large" }} className='text-light'>Skynet Broadband</h3>
                    <h5>Internet</h5>
                    <h6>Starting from ₹450/Month</h6>
                    <ul>
                        <li>24/7 Customer Support</li>
                        <li>FTTH Technology</li>
                        <li>Unlimited Data</li>
                        <li>Upload As Fast As You Download</li>
                    </ul>
                    <div className='text-center my-4'>
                        <Button style={{ backgroundColor: "white", color: "#5271fd", fontWeight: "600" }}>CHECK PLANS</Button>
                    </div>
                </Col>

                <Col className='p-3' >
                    <h3 style={{ color: "#5271fd", fontSize: "x-large" }}>Skynet Digital TV</h3>
                    <h5>HD Cable TV</h5>
                    <h6>Starting from ₹300/Month</h6>
                    <ul>
                        <li>24/7 Customer Support</li>
                        <li>300+ channels</li>
                        <li>150+ HD channels</li>
                        <li>Record and watch later</li>
                    </ul>
                    <div className='text-center my-4'>
                        <Button style={{ backgroundColor: "#5271fd", color: "white", fontWeight: "600" }}>CHECK PLANS</Button>
                    </div>

                </Col>
                <Col className='p-3' style={{ backgroundColor: "#5271fd", borderTopLeftRadius: "30px", borderBottomRightRadius: "30px" }}>
                    <h3 style={{ fontSize: "x-large" }} className='text-light'>TV + Broadband</h3>
                    <h5>HD Cable TV + Internet</h5>
                    <h6>Starting from ₹700/Month</h6>
                    <ul>
                        <li>24/7 Customer Support</li>
                        <li>300+ channels</li>
                        <li>150+ HD channels</li>
                        <li>Record and watch later</li>
                    </ul>
                    <div className='text-center my-4'>
                        <Button style={{ backgroundColor: "white", color: "#5271fd", fontWeight: "600" }}>CHECK PLANS</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Plans
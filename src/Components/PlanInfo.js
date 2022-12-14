import React from 'react'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

function PlanInfo() {
    return (
        <div class="list-group mt-3">
            <label style={{backgroundColor:"#fdde52",borderColor:"#fdde52",color:"#5271fd"}} class="list-group-item list-group-item-action active" aria-current="true">
                <Row>
                    <Col>
                    <h3>150Mbps</h3>
                    </Col>
                    <Col>
                    <h3>₹699/</h3>
                    </Col>
                </Row>
            </label>
        </div>
    )
}

export default PlanInfo
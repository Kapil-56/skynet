import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" className='m-auto'>
                    Plans
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                <img src={props.img} alt="" className='w-100' />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


function Moodal(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button onClick={() => setModalShow(true)} style={{ backgroundColor: `${props.background}`, color: `${props.color}`, fontWeight: "600" }}>CHECK PLANS</Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                img={`${props.img}`}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default Moodal
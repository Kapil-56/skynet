import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Iplans from './img/demoplan.png'
import TVplans from './img/demoplan2.png'
import ITVplans from './img/demoplan3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderTree, faTv, faWifi } from '@fortawesome/free-solid-svg-icons'


// import Sonnet from '../../components/Sonnet';

function Togglee(props) {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#BroadbandPlans">
      {/* <Row> */}
      <Row sm={8}>
        <ListGroup className='flex-row'>
          <ListGroup.Item className='d-flex align-items-center' action href="#BroadbandPlans">
            <FontAwesomeIcon className='mx-1' icon={faWifi}></FontAwesomeIcon>
            Broadband
          </ListGroup.Item>
          <ListGroup.Item className='d-flex align-items-center' action href="#CablePlans">
            <FontAwesomeIcon className='mx-1' icon={faTv}></FontAwesomeIcon>
            Cable TV
          </ListGroup.Item>
          <ListGroup.Item className='d-flex align-items-center' action href="#Combo">
            <FontAwesomeIcon className='mx-1' icon={faFolderTree}></FontAwesomeIcon>
            Combo
          </ListGroup.Item>
        </ListGroup>
      </Row>
      <Col sm={12}>
        <Tab.Content>
          <Tab.Pane eventKey="#BroadbandPlans">
            <div className="img">
              <img src={Iplans} alt="combo" style={{ width: "75%", display: "block", margin: "auto" }} />
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="#CablePlans">
            <div className="img">
              <img src={TVplans} alt="combo" style={{ width: "75%", display: "block", margin: "auto" }} />
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="#Combo">
            {/* <Sonnet /> */}
            {/* <div className="img"> */}
            <img src={ITVplans} alt="combo" style={{ width: "75%", display: "block", margin: "auto" }} />
            {/* </div> */}

          </Tab.Pane>
        </Tab.Content>
      </Col>
      {/* </Row> */}
    </Tab.Container>
  );
}

export default Togglee;
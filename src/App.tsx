import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

import './App.css'
import Topbar from './Topbar';
import TextBox from './TextBox';
import Photo from './Photo';
import Footer from './Foooter';

function App() {


  return (
    <>
      <Container fluid>
        <Topbar />
        <Row>
          <Col md={7}>
            <TextBox />
            <Footer />
          </Col>
          <Col md={5}>
            <Photo />
          </Col>

        </Row>


      </Container>




    </>
  )
}

export default App

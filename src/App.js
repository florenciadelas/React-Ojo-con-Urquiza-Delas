// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nabvar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col> < Navbar /></Col>
        </Row>
        <Row>
          <Col> <ItemListContainer greeting={"Indumentaria para las clases y para la vida"}/> </Col>
        </Row> <Row>
          <Col>  <ItemCount stock={20} initial={1}/> </Col>
        </Row>
      </Container>
      
    </>
   );
}
export default App;


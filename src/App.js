// import logo from './logo.svg';
import './App.css';
import Menu from './components/Nabvar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col> < Menu /></Col>
        </Row>
        <Row>
          <Col> <ItemListContainer greeting={"Indumentaria para las clases y para la vida"}/> </Col>
        </Row>
      </Container>
    </>
   );
}
export default App;


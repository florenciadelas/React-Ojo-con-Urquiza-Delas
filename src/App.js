// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nabvar/Navbar';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainter from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return ( <>
    <Navbar />
    {/* < ItemListContainer /> */}
    <ItemDetailContainter id={3}/>
    </>
  );
}
export default App;


// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nabvar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainter from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return ( <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={ < ItemListContainer /> }/>
    <Route path='/categoria/:name' element={<ItemListContainer/>}/>
    <Route path='/item/:id' element={<ItemDetailContainter/>}/>
    <Route path="*" element={"Ups! Parece que algo salio mal"} />
    </Routes>
  
    
    </BrowserRouter>
    </>
  );
}
export default App;


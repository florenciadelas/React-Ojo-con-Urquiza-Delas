import './App.css';
import Navbar from './components/Nabvar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainter from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from './components/Cart/Cart';
import CartProvider from './Contexts/CartContext';


function App() {
  return ( <>
  <CartProvider>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={ < ItemListContainer /> }/>
    <Route path='/categoria/:name' element={<ItemListContainer/>}/>
    <Route path='/item/:id' element={<ItemDetailContainter />}/>
    <Route path="*" element={"Ups! Parece que algo salio mal"} />
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  );
}
export default App;


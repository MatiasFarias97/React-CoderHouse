import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomNavBar from './components/CustomNavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Footer from './components/Footer.jsx';
import CartContextProvider from './components/CartContext.jsx';


const App = () => {
  
  return (

    <div className='bgBody'>
   <CartContextProvider>
    <BrowserRouter>
      <CustomNavBar/>
      <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </CartContextProvider>
    </div>
  )
}

export default App;

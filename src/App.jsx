import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomNavBar from './components/CustomNavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer'

const App = () => {
  
  return(
    <div className='bgBody'>
    <BrowserRouter>
      <CustomNavBar/>
      <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )

  // return(
  //   <div className='bgBody'>
  //     <CustomNavBar/>
  //     <ItemDetail/>
  //   </div>
  // )
}

export default App;

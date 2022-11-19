import CustomNavBar from './components/CustomNavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

const App = () => {
  
  return(
    <>
      <CustomNavBar/>
      <ItemListContainer greeting="Hola ItemListContainer" />
    </>
  )
}

export default App;

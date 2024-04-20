import './App.css'
import {Route, Routes} from 'react-router-dom'
import Details from './pages/details/Details'
import Favorites from './pages/favorites/Favorites'

import Nav from './components/Nav'
import Home from './pages/home/Home'

function App() {

  return (
    <div  className= ' font-montserrat'>
       
       <Nav />
       <Routes>
          <Route path='/yum-yum' element={<Home/>}/>
          <Route path='/yum-yum/favorites' element={<Favorites/>}/>
          <Route path='/dish-item/:id' element={<Details/>} />
       </Routes>   
    </div>
  )
}

export default App

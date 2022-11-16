// import logo from './logo.svg';
import './App.css';
import { ItemCount } from "./components/ItemCount/ItemCount.jsx";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import {NavBar} from "./components/navBar/NavBar"
import { Navigate, Route, Routes } from "react-router-dom";
// import { Contact } from './components/contact/Contact';
// import { About } from './components/about/About';
import { Footer } from './components/footer/Footer';
import { Detail } from './components/detail/Detail.jsx'
import { CartContainer } from './components/cartContainer/CartContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='rutas'>
        <Routes>
          <Route  path='/' element={<Navigate to="/home" replace />} />
          <Route path='/home' exact element={<ItemListContainer  greeting={'pasando un texto por props'}/>}/>
          <Route path='/count' element={<ItemCount />}/>
          <Route path='/product/:categoryName' element={<ItemListContainer />}/> 
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/cart' element={<CartContainer />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App; 

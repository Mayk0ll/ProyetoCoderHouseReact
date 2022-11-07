// import logo from './logo.svg';
import './App.css';
import { ItemCount } from "./components/ItemCount/ItemCount.jsx";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import {NavBar} from "./components/navBar/NavBar"
import { Route, Routes } from "react-router-dom";
// import { Contact } from './components/contact/Contact';
// import { About } from './components/about/About';
import { Footer } from './components/footer/Footer';
import { Detail } from './components/detail/Detail.jsx'
import { CartContainer } from './components/cartContainer/CartContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/home' exact element={<ItemListContainer  greeting={'pasando un texto por props'}/>}/>
        <Route path='/count' element={<ItemCount />}/>
        {/* <Route path='/about' element={ <About />}/> */}
        {/* <Route path='/contact' element={ <Contact />}/> */}
        <Route path='/product/:categoryName' element={<ItemListContainer />}/> 
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='/cart' element={<CartContainer />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 

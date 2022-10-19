import { ItemCount } from "./ItemCount/ItemCount.jsx";
import { ItemListContainer } from "./itemListContainer/ItemListContainer.js";
// import { NavBar } from "./navBar/NavBar.js";


function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <ItemListContainer  greeting={'pasando un texto por props'}/>
      <ItemCount />
    </div>
  );
}

export default App;

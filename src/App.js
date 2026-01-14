/*import Login from './login.js';
function App() {
  
   
  return (
  <>
  
  <Login/>
  
  </>
  );
}

export default App;*/








import Main from './main.js'
import Cart from './cart.js';
import Login from './login.js';
import Item from './item.js';
import { useState } from "react";

import {
  
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [cart, setCart] = useState([]);
  const [Value, setValue] = useState(0);
  const [add, setadd] = useState(false);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setValue(e => e + 1);
    setadd(true);

    setTimeout(() => {
      setadd(false);
    }, 3000); 
  };
  const handleitem = (i) => {
    setCart(() => [i]);
    setValue(e => e + 1);
    setadd(true);

    setTimeout(() => {
      setadd(false);
    }, 3000);
  };

  return (
    <>
      
        <Routes>
  <Route index element={
    <Main
      handleAddToCart={handleAddToCart}
      add={add}
      Value={Value}
    />
  } />

  <Route path="cart" element={<Cart cart={cart} />} />
  <Route path="login" element={<Login />} />
  <Route path="item/:id" element={<Item handleitem={handleitem} />} />
</Routes>
      


    </>
  );
}

export default App;










/*import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";*/
/* <>
     <Router>
       <Routes>
         <Route path="/login" element={<Login setSubmit={setSubmit} />} />
         <Route path="/" element={<Start Submit={Submit} />} />
         <Route path="/buy" element={<Buy />} />
       </Routes>
     </Router>

   </>*/
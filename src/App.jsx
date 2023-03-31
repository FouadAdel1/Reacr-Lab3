
import { Route,  Routes } from 'react-router-dom';
import './App.css';

import MyNav from './MyNav/MyNav';
import Products from './Products/Products';
import NotFound from './NotFound/NotFound';
import Home from './Home/Home';
import AddProduct from './AddProducts/AddProduct';
import { ProductDetails } from './Products/ProductDetails';
function App() {
  return (
    <div className="App">
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/Products/edit/:id" element={<AddProduct />} />
        <Route path="/Products/edit/:id" element={<AddProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

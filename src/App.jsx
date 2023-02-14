import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/product/:tipoProducto"
                element={<ItemListContainer />}
              />
              <Route
                path="/item/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="/*" element={<Error404 />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;

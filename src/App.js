import "./App.css";
import Header from "./Container/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./Container/ProductListing";
import ProductDetails from "./Container/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

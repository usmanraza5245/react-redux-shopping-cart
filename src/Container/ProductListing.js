import React, { useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

function ProductListing() {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <Container>
      <div className="m-5">
        <h1>ProductListing</h1>
        <Row>
          <ProductComponent />
        </Row>
      </div>
    </Container>
  );
}

export default ProductListing;

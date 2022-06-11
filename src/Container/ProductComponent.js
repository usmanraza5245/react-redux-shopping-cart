import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, description, image, price, category } = product;
    return (
      <Col
        xs={10}
        md={6}
        lg={4}
        className="mx-auto d-flex align-items-stretch"
        key={id}
      >
        <Card className="p-4 mb-4">
          <Card.Img
            src={image}
            alt="product image"
            style={{ width: "100%", height: "200px", objectFit: "contain" }}
          />
          <Card.Title className="text-center py-3 mt-3">{title}</Card.Title>
          <Card.Text className="">{description.substring(0, 200)}</Card.Text>
          <div className="d-flex flex-row justify-content-between">
            <div className="meta price">$ {price}</div>
            <div className="meta">{category}</div>
          </div>
          <Link to={`/product/${id}`} className="stretched-link" />
        </Card>
      </Col>
    );
  });
  return <>{renderList}</>;
}

export default ProductComponent;

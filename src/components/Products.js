import React, { useState, useEffect } from "react";
import "./Product.style.css";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const callProductAPI = async () => {
      const apiData = await fetch("https://fakestoreapi.com/products");
      const data = await apiData.json();
      setProduct(data);
    };
    callProductAPI();
  }, []);
  console.log(product);

  return (
    <div className="product_warper">
      {product.map((val) => {
        return (
          <div key={val.id} className="product_card">
            <div className="product_card_Img">
              <img src={val.image} />
            </div>
            <div className="product_card_title">
              <h4>{` ${val.title.substring(0, 30)}${
                val.title.length > 30 ? ".." : ""
              } `}</h4>
            </div>

            <div className="product_card_price">
              <p>{val.price}</p>
            </div>
            <div className="product_card_description">
              <p>
                {val.description.substring(0, 90)}
                {val.description.length > 90 ? ".." : ""}{" "}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

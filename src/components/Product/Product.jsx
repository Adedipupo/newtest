import React, { useEffect, useState } from "react";
import "./product.css";
import { RotatingTriangles } from "react-loader-spinner";
import { useQuery } from "@tanstack/react-query";

export default function Product() {
  // const [products, setProducts] = useState(null);
  // const [loading, setLoading] = useState(false);


  const { isLoading, error, data } = useQuery(['shoppingData'], () =>
    fetch('https://shoppingapiacme.herokuapp.com/shopping').then(res =>
      res.json()
    )
  )

  // useEffect(() => {
  //   try {
  //     setLoading(true);
  //     fetch("https://shoppingapiacme.herokuapp.com/shopping")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setProducts(data);
  //         setLoading(false);
  //       });
  //   } catch (error) {
  //     setLoading(false);
  //     console.error(error);
  //   }
  // }, []);
console.log("first", data)
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="item-container">
        {isLoading ? (
          // <InfinitySpin
          //     width='300'
          //     color="#4fa94d"
          //     />
          <RotatingTriangles
            visible={true}
            height="80"
            width="80"
            ariaLabel="rotating-triangels-loading"
            wrapperStyle={{}}
            wrapperClass="rotating-triangels-wrapper"
          />
        ) : (
          data?.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.item} />
              <h3>{product.item}</h3>
              <p>{product.brand}</p>
              <p>{product.color}</p>
              <p>
                <b>{product.price}</b>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

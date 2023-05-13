import React, { useEffect, useState } from "react";
import "./css/Fruits.css";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";


function Fruits({ addToCart }) {
  const handleClick = (fruit) => {
    addToCart(fruit);
  };

  const [fruit_list, set_fruit_list] = useState([]);
  const fruit_list_handler = (list) => set_fruit_list(list);

  useEffect(() => {
    var request_options = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:5092/products", request_options)
      .then((response) => response.json())
      .then((result) => {
        let list = [];
        result.forEach((product) => {
          if (product.category === "Fruits") {
            list.push(product);
          }
        });
        fruit_list_handler(list);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="container">
      <div>
        <h1>Fruits</h1>
        <Grid container spacing={2}>
          {fruit_list.map((fruit, index) => (
            <Grid item key={index}>
              <Card className="card" onClick={() => handleClick(fruit)}>
                <CardContent>
                  {fruit.productName + " - $" + fruit.price.toFixed(2)}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Fruits;

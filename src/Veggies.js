import React, { useEffect, useState } from "react";
import "./css/Veggies.css";
import { Grid } from "@mui/material";
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";

function Veggies({ addToCart }) {
    const handleClick = (veggie) => {
        addToCart(veggie);
    };

    const [veggie_list, set_veggie_list] = useState([]);
	const veggie_list_handler = (list) => set_veggie_list(list);

    useEffect(() => {
    
        var request_options = {
        method: "GET",
        redirect: "follow",
    };
    
    fetch("http://localhost:5171/products", request_options)
        .then((response) => response.json())
        .then((result) => {
            let list = [];
            result.forEach((product) => {
                if(product.category === "Vegetables"){
                list.push(product);
                }
            });
            veggie_list_handler(list);
        })
        .catch(error => console.log('error', error));
    
    }, []);

    return (
        <div className="container">
          <div>
            <h1 className="heading">Vegetables</h1>
            <div className="veggie-list">
              <Grid container spacing={2}>
                {veggie_list.map((veggie, index) => (
                  <Grid item key={index}>
                    <Card className="card" onClick={() => handleClick(veggie)}>
                      <CardContent>
                        {veggie.productName + " - $" + veggie.price.toFixed(2)}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </div>
      );
    }

export default Veggies;

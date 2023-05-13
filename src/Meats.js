import React, { useEffect, useState } from "react";
import "./css/Meats.css";
import { Grid } from "@mui/material";
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";

function Meats({ addToCart }) {
    const handleClick = (meat) => {
        addToCart(meat);
    };

    const [meat_list, set_meat_list] = useState([]);
	const meat_list_handler = (list) => set_meat_list(list);

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
                if(product.category === "Meats"){
                list.push(product);
                }
            });
            meat_list_handler(list);
        })
        .catch(error => console.log('error', error));
    
    }, []);

    return (
        <div className="container">
          <div>
            <h1 className="heading">Meats</h1>
            <div className="meat-list">
              <Grid container spacing={2}>
                {meat_list.map((meat, index) => (
                  <Grid item key={index}>
                    <Card className="card" onClick={() => handleClick(meat)}>
                      <CardContent>
                        {meat.productName + " - $" + meat.price.toFixed(2)}
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

export default Meats;

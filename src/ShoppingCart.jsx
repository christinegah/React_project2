import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component
{
    state = {
        products:[
            {id:1, productName: "Iphone", price: 4090000, quantity: 0},
            {id:2, productName: "Sony Camera", price: 780000, quantity: 0},
            {id:3, productName: "Sumsung", price: 50000, quantity: 0},
            {id:4, productName: "Teckno", price: 20000, quantity: 0},
            {id:5, productName: "i phone pro", price: 90000, quantity: 0},

    ],
    
    };
render(){

    return(
    <div className="container-fluid">
        <h4>Shopping carts</h4>

        <div className="row">
            {this.state.products.map((prod) => {
                return(
                    <Product key={prod.id} 
                    product={prod} 
                    onIncrement ={this.handleIncrement}
                    onDecrement = {this.handledecrement}
                    >
                  <button className="btn btn-primary">Buy Now</button>
                    </Product>
                );
               
                  
                
            })
            }
        </div>
        </div>
        );
}
// render ends here
handleIncrement = () =>
{

};
handledecrement = () =>
{

};

}
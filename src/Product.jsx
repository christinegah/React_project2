import React, { Component } from "react";

export default class Product extends Component
{
    state ={
        product: this.props.product
        };
render()
{
        console.log(this.props);
         return (
            <div className="col-lg-6"> 
            
            <div className="card m-2"> 
        <div class="card-body">
        <div className="text-muted"># {this.state.product.id}</div>
        <h5 className="pt-5 border-top"> 
        {this.state.product.productName}
         </h5>
        <div>$ {this.state.product.price}</div>
    </div>

     <div className="card-footer text-right">
        <div className="float-left">
       <span className="badge">{this.state.product.quantity}</span>
       
       <div className="btn-group ml-4">
       <button className="btn btn-outline-success ">+</button>
        <button className="btn btn-outline-success">-</button>
       </div>
        </div>

        {/* float-left ends here */}
        <div className="float-right">{this.props.children}</div>

     </div>

    </div>

            </div>
  
    );
}
}
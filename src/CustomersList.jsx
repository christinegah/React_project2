import React, { Component } from "react";

export default class CustomersList extends Component{

  state = {pageTitle: "Customers",
   customersCount:5,
   customers:[

    {id:1,name:"Ganza",
     phone:null, 
     price: "10$",
      address: {city: "Kigali"},
      photo: "https://picsum.photos/id/1010/60",

    },

    {id:2,
        name:"Anne",
     phone: "078950",
      price: "1$", 
     address: {city: "UG"},
     photo: "https://picsum.photos/id/1011/60",
    },

    {id:3,name:"Gahongayire",
     phone: "078057", 
     price: "20$", 
     address: {city: "USA"},
     photo: "https://picsum.photos/id/1012/60",
    },
    {id:4,
        name:"Yvette", 
    phone: "078555", 
    price: "100$", 
    address: {city: "London"},
    photo: "https://picsum.photos/id/1013/60",
},
    {id:5,
        name:"Umurerwa",
         phone: null,
          price: "300$",
           address: {city: "Bel"},
           photo: "https://picsum.photos/id/1014/60",
        },
   ],
};


    render(){
        return (
        <div>
            <h1 className=" m-1 p-1">
                {this.state.pageTitle}
            <span className=" m-2 ">
                {this.state.customersCount}
            </span>  
            <button className="btn btn-info"
            onClick={this.onRefreshClick}>Refresh</button>
            </h1>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>PHOTO</th>
                        <th>CUSTOMER Name</th>
                        <th>Phone</th>
                        <th>price</th>
                        <th>City</th>
                    </tr>
                </thead>
        <tbody>
        {this.getCustomerRow()}
           
       </tbody>
            </table>
            </div>
        );
    
    }
//Execute when user clicks on reflesh button
onRefreshClick = () =>{
this.setState({customersCount:7});
}

getPhoneToRender =(phone)=> {
    if(phone)return phone ;

  else{
    return  <div className="bg-warning p-2 text-center">No Phone</div>;

  }   
    
}

getCustomerRow=() => {

    {
        return(this.state.customers.map((cust, index) => {
    return (
    <tr key={cust.id}> 
    <td>{cust.id}</td>
    <td>
        <img src={cust.photo} alt="customer"/>
        
         <di>
            <button className="btn btn-sm btn-secondary"
             onClick={() =>{
                this.onChangePictureClick(cust, index);}}
             >Change picture</button>
         </di>
    </td>
    <td >{cust.name}</td>

    <td>{this.getPhoneToRender(cust.phone)}</td>
   
    <td>{cust.price}</td>
    <td>{cust.address.city}</td>

</tr>
    );

        }));
    } ;
    

   
}
//executes when you want to change picture
onChangePictureClick = (cust, index)=>{
        //console.log(cust);
        //console.log(index);
        var custArr = this.state.customers;
        custArr[index].photo="https://picsum.photos/id/104/60";
        //updates "CUstomers"
        this.setState({customers: custArr});
};
} 
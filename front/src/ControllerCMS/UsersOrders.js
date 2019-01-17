import React, { Component } from 'react';
import { ToastContainer, toast } from "react-toastify";

class UsersOrders extends Component {

  state = {
    orders:[]
  }



  getAllOrders = async () => {

    const response = await fetch(
      `http://localhost:5000/orders/allorders`
    );
    const answer = await response.json();
    if (answer) {
      const orders = answer.result;
      this.setState({ orders });
      toast("orders loaded")
    }

  };

    componentDidMount() {
      this.getAllOrders();
    }


    deleteOrder = async id =>{
      const response = await fetch(`http://localhost:5000/orders/deleteOrder/${id}`)
      const answer = await response.json()
      if (answer) {
        const orders = this.state.orders.filter(
          order => order.id !== id
        );
        toast(`cake deleted`);
        this.setState({ orders });
      }

    }


  
  render() {
    if (localStorage.getItem("token") !== "null") {
      return (
        <div className="">
        <div className="myPar controlall">
        <h1>Users Orders</h1>
      </div>
      <div className="linkdivs">
        <a className="controllerNavigation" href="/control">Back to Control Panel</a>
      </div>
        <div>
  
         {this.state.orders.map(order=>
         <div className="orderslist">
           <h4>Date : {order.date}</h4>
           <h4>order number : {order.id || ""} </h4>
           <h4>ordered  by  : {order.username || ""}</h4>
           <h4>Phone number : {order.number || ""}</h4>
           <h4>Address  :{order.address || ""}</h4>
           <h4>ordered : {order.userorder || ""}</h4>
           <button onClick={()=>this.deleteOrder(order.id)}>Delete order</button>
  
          </div>
         )}
        
        
        <ToastContainer />
        </div>
      </div>)
    }else {
      return (
        <h1 className="notauth">Not Authorized</h1>
      )
    }

  
       }}

export default UsersOrders;
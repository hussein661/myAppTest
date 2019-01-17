import React from 'react'
import '../styles/makeanorder.css'
import { ToastContainer, toast } from "react-toastify";
import {Link} from 'react-router-dom';



class Order extends React.Component {

    state= {
        username:"",
        number:"",
        address:"",
        userorder:"",
        redirect:false,
        submitted:false
    }
    

  addOrder= async (username,number,address,userorder) => {
    const response = await fetch(`http://localhost:5000/orders/addorder?username=${username}&number=${number}&address=${address}&userorder=${userorder}`);
    const answer = await response.json();
    if (answer) {
        this.setState({submitted:true})
        toast(` Thank you ${username} Your order has been submitted`);

        
        

      }
    }

  onSubmit = event => {
    event.preventDefault();
    const { username, number,address, userorder } = this.state;
    console.log(this.state)
    this.addOrder(username, number,address, userorder);
    this.setState({ username : "", number : "",address : "", userorder : "" })
    
  }

  renderBeforeSubmit(){

    const userorders = this.props.state.orders;
        if (userorders) {

            const pricesArray = []
            userorders.map(price =>
                pricesArray.push((price.price) * price.qty)
            )
            var sum = pricesArray.reduce((a, b) => a + b, 0)
            var userOrderString = ""
            userOrderString = userorders.map(order=> order.name + " x " +order.qty + " for " + order.price*order.qty )
            this.state.userorder = userOrderString;
            return (
                <div className="bg-contact2" >
                    <div className="container-contact2" >
                        <div className="wrap-contact2" >
                            <form className="contact2-form validate-form" onSubmit={this.onSubmit}>
                                <span className="contact2-form-title">
                                    Submit Your Order
                        </span>

                                <div className="wrap-input2 validate-input" data-validate="Name is required" required>
                                <label for="name">Your Name</label>
                                    <input className="input2" type="text" name="name" onChange={event=>this.setState({username:event.target.value})} />
                                </div>

                                <div className="wrap-input2 validate-input" >
                                    <label for="number" >Your Number</label>
                                    <input className="input2" type="text" name="number" required onChange={event=>this.setState({number:event.target.value})} />
                                </div>
                                <div className="wrap-input2 validate-input" >
                                <label for="address">Your Address</label>
                                    <input className="input2" type="text" name="address"   required onChange={event=>this.setState({address:event.target.value})}/>
                                </div>
                                <table id="orderstable">
                                    <tr>
                                        <td>Item name</td><td>Price</td><td>Qty</td><td>Total</td>
                                    </tr>
                                    {userorders.map(order =>
                                        <tr>
                                            <td>{order.name}</td><td>{order.price + " L.L "}</td><td>{order.qty}</td><td>{order.price * order.qty + " L.L"}</td>

                                        </tr>
                                    )}


                                    <tr>
                                        <td colSpan="3">Overall Total : </td><td>{sum + " L.L "}</td>
                                    </tr>

                                </table>
                                <hr />




                                <div className="container-contact2-form-btn">
                                    <div className="wrap-contact2-form-btn">
                                        <div className="contact2-form-bgbtn"></div>
                                        <button className="contact2-form-btn" type="submit">
                                            Submit
                                </button>
                                <Link to="/menu">
                                <button className="contact2-form-btn" type="reset">
                                            Cancel
                                </button>
                                </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* {this.state.redirect && (
                        <Redirect to={{ pathname: '/menu', state: { toast : "thank you" } }}/>                    
                               )
                               
                            } */}
                    </div>
                    <ToastContainer/>
                </div>


            )
        } else {
            return (
                <div>
                    <h1>No Orders </h1>
                    <ToastContainer/>

                </div>
            )
        }

    }


    renderAfterSubmit(){

        const userorders = this.props.state.orders;
            if (userorders) {
    
                const pricesArray = []
                userorders.map(price =>
                    pricesArray.push((price.price) * price.qty)
                )
                var sum = pricesArray.reduce((a, b) => a + b, 0)
                var userOrderString = ""
                userOrderString = userorders.map(order=> order.name + " x " +order.qty + " for " + order.price*order.qty )
                this.state.userorder = userOrderString;
                return (
                    <div className="bg-contact2" >
                        <div className="container-contact2" >
                            <div className="wrap-contact2" >
                                <form className="contact2-form validate-form" onSubmit={this.onSubmit}>
                                    <span className="contact2-form-title">
                                        Submit Your Order
                            </span>
    
                                    <div className="wrap-input2 validate-input" data-validate="Name is required" required>
                                    <label for="name">Your Name</label>
                                        <input className="input2" type="text" name="name" onChange={event=>this.setState({username:event.target.value})} />
                                    </div>
    
                                    <div className="wrap-input2 validate-input" >
                                        <label for="number" >Your Number</label>
                                        <input className="input2" type="text" name="number" required onChange={event=>this.setState({number:event.target.value})} />
                                    </div>
                                    <div className="wrap-input2 validate-input" >
                                    <label for="address">Your Address</label>
                                        <input className="input2" type="text" name="address"   required onChange={event=>this.setState({address:event.target.value})}/>
                                    </div>
                                    <table id="orderstable">
                                        <tr>
                                            <td>Item name</td><td>Price</td><td>Qty</td><td>Total</td>
                                        </tr>
                                        {userorders.map(order =>
                                            <tr>
                                                <td>{order.name}</td><td>{order.price + " L.L "}</td><td>{order.qty}</td><td>{order.price * order.qty + " L.L"}</td>
    
                                            </tr>
                                        )}
    
    
                                        <tr>
                                            <td colSpan="3">Overall Total : </td><td>{sum + " L.L "}</td>
                                        </tr>
    
                                    </table>
                                    <hr />
    
    
    
    
                                    <div className="container-contact2-form-btn">
                                        <div className="wrap-contact2-form-btn">
                                            <div className="contact2-form-bgbtn"></div>

                                    <Link to="/menu">
                                    <button className="contact2-form-btn" type="reset">
                                                Back To Store
                                    </button>
                                    </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* {this.state.redirect && (
                            <Redirect to={{ pathname: '/menu', state: { toast : "thank you" } }}/>                    
                                   )
                                   
                                } */}
                        </div>
                        <ToastContainer/>
                    </div>
    
    
                )
            } else {
                return (
                    <div>
                        <h1>No Orders </h1>
                        <ToastContainer/>
    
                    </div>
                )
            }
    
        }
      
  
    render() {
    if(this.state.submitted === false){
 return this.renderBeforeSubmit()
}else {
    return this.renderAfterSubmit()
}

}
}
export default Order;
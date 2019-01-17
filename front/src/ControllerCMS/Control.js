import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import { makeRequestUrl } from "./utils.js";
import { Link } from 'react-router-dom'



const makeUrl = (path, params) => makeRequestUrl(`http://localhost:5000/${path}`,params)

class Control extends React.Component {


  state = {

    token:"null",
    name:null
  
  }




  login = async (username, password) => {

      const url = makeUrl(`login`, { username, password, token: this.state.token });
      const response = await fetch(url);
      const answer = await response.json();
      if (answer.success) {
        const { token, name } = answer.result
        this.setState({ token, name });
        toast(`successful login`);
      } else {
        toast.error(`Incorrect username or password`)
      }
    } 


  logout = async () => {

      const url = makeUrl(`logout`, { token: this.state.token });
      const response = await fetch(url);
      const answer = await response.json();
      if (answer.success) {
        this.setState({ token:"null", name:null });
        toast(`successful logout`);
      }
  };


  handleLogin = (evt) => {
    evt.preventDefault();
    const username = evt.target.username.value
    const password = evt.target.password.value
    this.login(username,password)
  }

  

  handleLogout = () =>{
      this.logout();
  }


    checkLoggedIn = async () => {
      const url = makeUrl(`mypage`, { token: this.state.token });
      const response = await fetch(url);
      const answer = await response.json();
      if (answer.success) {
        const message = answer.result
        toast(`received from the server: '${message}'`);
      } else {
        toast.error("not authorized");
        this.logout();
        
      }
  }

  componentDidMount(){
    const token = localStorage.getItem("token")
    this.setState({token})
  }

  componentDidUpdate(){
    localStorage.setItem("token",this.state.token)
  }




  renderLogin(){
    return (
      <div className="">
        <div className="myPar controlall">
          <h1>Control Panel</h1>
        </div>

      <form onSubmit={this.handleLogin}>
        <input
            className="form-control"
            type="text"
            name="username"
            placeholder="username"
                    />

          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="password"
                     />
        <div className="linkdivs">
          <button type="submit" className="controllerNavigation">Login</button>
        </div>
        </form>
        <ToastContainer />

      </div>

    )
  }

  renderControl(){

    return (
      <div className="">
        <div className="myPar controlall">
          <h1>Control Panel</h1>
        </div>
        <div className="linkdivs">
          <Link className="controllerNavigation" to="/control/menuController">Menu Controller</Link>
          <Link className="controllerNavigation" to="/control/blogController">blog Controller</Link>
          <Link className="controllerNavigation" to="/control/usersOrders">users Orders</Link>
          <button className="controllerNavigation navbuttton" onClick={this.handleLogout}>logout</button>


        </div>
        <ToastContainer />

      </div>

    )

  }

  render() {

    // const {token} = this.state.token
    if (this.state.token === "null"){
      return this.renderLogin();
    }
    return this.renderControl();
  }

}

export default Control;
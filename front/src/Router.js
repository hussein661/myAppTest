import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MakeAnOrder from './pages/MakeAnOrder';
import MenuController from './ControllerCMS/MenuController';
import BlogController from './ControllerCMS/BlogController'
import Control from './ControllerCMS/Control'
import Blog from './pages/Blog'
import Post from './pages/Post'
import AboutUS from './pages/AboutUs';
import UsersOrders from './ControllerCMS/UsersOrders';
import Checkout from './components/Checkout';



const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/makeanorder" component={MakeAnOrder}/>
      <Route exact path="/AboutUs" component={AboutUS}/>
      <Route exact path="/menu" component={Menu}/>
      <Route exact path="/control/menuController" component={MenuController}/>
      <Route exact path="/control/blogController" component={BlogController}/>
      <Route exact path="/control/usersOrders" component={UsersOrders}/>
      <Route exact path="/control" component={Control}/>
      <Route exact path="/Blog" component={Blog}/>
      <Route exact path="/posts/:id" component={Post}/>
      <Route exact path="/checkout" component={Checkout}/>
    </Switch>
  </BrowserRouter>
)


export default Router;
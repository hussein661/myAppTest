import React from 'react'
import Cakeitem from './Cakeitem'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default class MenuController extends React.Component {

  state = {
    allcakes: [],
    name: "",
    catname: "",
    description: "",
    image: "",
    price: ""
  }

  getAllCakes = async () => {

    const response = await fetch(
      `http://localhost:5000/cakes/allcakes`
    );
    const answer = await response.json();
    if (answer.success) {
      const allcakes = answer.result;
      this.setState({ allcakes });
      toast("cakes loaded")
    }

  };

  addCake = async (props) => {
    const { name, catname, description, image, price } = props;
    const response = await fetch(`http://localhost:5000/cakes/addcake?name=${name}&catname=${catname}&description=${description}&price=${price}&image=${image}`);
    const answer = await response.json();
    if (answer.success) {
      const id = answer.result;
      const cake = { name, catname, description, image, price, id }
      const allcakes = [...this.state.allcakes, cake]
      toast(`cake "${name}" added to "${catname}"`);
      this.setState({ allcakes })

    }
  }

  updateCake = async (id, props) => {
    const response = await fetch(`http://localhost:5000/cakes/updatecake/${id}?name=${props.name}&catname=${props.catname}&description=${props.description}&image=${props.image}&price=${props.price}`)
    const answer = await response.json();
    if (answer) {
      const allcakes = this.state.allcakes.map(cake => {
        if (cake.id === id) {

          const updatedCake = {
            id: cake.id,
            name: props.name,
            catname: props.catname,
            description: props.description,
            image: cake.image,
            price: props.price
          }

          toast(`cake "${updatedCake.name}" updated`);
          return updatedCake
        }
        else {
          return cake
        }
      });
      this.setState({ allcakes });
    }
  }

  deleteCake = async id => {
    const response = await fetch(`http://localhost:5000/cakes/deletecake/${id}`);
    const answer = await response.json();
    if (answer) {
      const allcakes = this.state.allcakes.filter(
        cake => cake.id !== id
      );
      toast(`cake deleted`);
      this.setState({ allcakes });
    }
  }



  deleteAllCakes = async () => {
    if (window.confirm("are you sure !?")) {
      const response = await fetch(`http://localhost:5000/cakes/deleteall`);
      const answer = await response.json();
      if (answer.success) {
        const allcakes = answer.result;
        this.setState({ allcakes })
      }
    }
  }

  componentDidMount() {
    this.getAllCakes();
  }



  handleimage = async (event) => {
    const files = event.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'square')

    const res = await fetch('https://api.cloudinary.com/v1_1/dhmbvtwig/image/upload', {
      method: 'POST',
      body: data
    })
    const file = await res.json()
    this.setState({
      image: file.secure_url
    })

  }

  onSubmit = event => {
    event.preventDefault();
    const { name, catname, description, image, price } = this.state;
    this.addCake({ name, catname, description, image, price });
    this.setState({ name: "", catname: "", description: "", image: "", price: "" })
  }

 renderIfUser(){
  if (localStorage.getItem("token") !== "null") {

    return (
      <div className="">
  
        <div className="myPar controlall">
          <h1>This is the Menu controller</h1>
        </div>
        <div className="linkdivs">
          <a className="controllerNavigation" href="/control">Back to Control Panel</a>
        </div>
        <div className="controlup controlall">
          <form onSubmit={this.onSubmit} className="addform">
            <label for="text">cake name</label>
            <input className="form-control"
              type="text"
              placeholder="name"
              onChange={event => this.setState({ name: event.target.value })}
              value={this.state.name}
              required />
  
            <label for="catname">cake category</label>
            <select className="form-control"
              id="selectcatname"
              name="catname"
              onChange={event => this.setState({ catname: event.target.value })}
              value={this.state.catname}
              required>
              <option value="">select category</option>
              <option value="offer">offer</option>
              <option value="cake">cake</option>
              <option value="cupcake">cupcake</option>
              <option value="cookies">cookies</option>
            </select>
  
            <label for="description">Item description</label>
            <textarea className="form-control"
              placeholder="description"
              onChange={event => this.setState({ description: event.target.value })}
              value={this.state.description}
            />
  
            <label for="image">cake image</label>
            <input className="form-control"
              type="file"
              name="image"
              accept="image/*"
              onChange={this.handleimage} />
  
            <label for="price">price</label>
            <input className="form-control"
              type="text"
              name="price"
              onChange={event => this.setState({ price: event.target.value })}
              value={this.state.price}
              required />
            <input className="form-btn" type="submit" value="add" />
            <input className="form-btn" type="reset" value="cancel" />
            <input type="button" className="form-btn" value="delete all" onClick={this.deleteAllCakes} />
  
          </form>
        </div>
            {/* <Transition
            items={allcakes}
            keys={cake => cake.id}
            from={{ transform: "translate3d(-100px,0,0)" }}
            enter={{ transform: "translate3d(0,0px,0)" }}
            leave={{ transform: "translate3d(-100px,0,0)" }}
            > */}
  
        <div className="grid-cake-container">
          {this.state.allcakes.map(cake =>
            <Cakeitem
              key={cake.id}
              id={cake.id}
              name={cake.name}
              catname={cake.catname}
              description={cake.description}
              image={cake.image}
              price={cake.price}
              deleteCake={this.deleteCake}
              updateCake={this.updateCake} />
          )}
        </div>
        {/* </Transition> */}
        <ToastContainer />
      </div>)

  }else {
    return(<h1 className="notauth">Not Authorized</h1>)
  }
  
 }
  render() {

    if(true){
      return this.renderIfUser();
    }else {

      return <h1>Forbidden</h1>
    }

    
    
  }


}


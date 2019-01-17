import React from 'react'


class CakeItem extends React.Component {


  state = {
    allcakes:[],
  }



  getAllCakes = async () => {

    const response = await fetch(
      `http://localhost:5000/cakes/allcatcake`
    );
    const answer = await response.json();
    if (answer) {
      const allcakes = answer.result;
      this.setState({allcakes});
    }
  }


  
  componentDidMount(){
    this.getAllCakes();

  }


  render(){

    return(
      <div className="grid-cake-container">
      {this.state.allcakes.map(cake=>
       <div class="cardpic layer-Cake">
        <h3 class="titlecard">{cake.name}</h3>
          <img src={cake.image} className="cake-item-img" alt="Responsive"/>
    <div class="price">{cake.price} L.L</div>
    <p className="desccard">{cake.description}this is a text one this is a text one this is a text one</p>
    <div class="item-in-cart">
      <button 
          class="btnCart"
          onClick={()=>this.props.addToOrder(cake.id,cake.name,cake.price)}>+ Add to Cart</button>
    </div>
  <div class="clearfix"></div>
</div>

        )}
      </div>

    



    )
  }
}

export default CakeItem;



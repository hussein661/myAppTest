import React from 'react'


class CupcakeItem extends React.Component {


  state = {
    allcakes:[]
  }
  getAllCakes = async () => {

    const response = await fetch(
      `http://localhost:5000/cakes/allcatcupcake`
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
<div className="cardpic layer-Cupcake">
  <div className="content">
        <h3 className="titlecard">{cake.name}</h3>
          <img src={cake.image} className="cake-item-img" alt="Responsive"/>
    <div className="price">{cake.price} L.L</div>
    <p className="desccard">{cake.description}</p>
    <div class="item-in-cart">
      <button 
          class="btnCart"
          onClick={()=>this.props.addToOrder(cake.id,cake.name,cake.price)}>+ Add to Cart</button>
    </div>
  </div>
  <div className="clearfix"></div>
</div>

        )}
      </div>

    



    )
  }
}

export default CupcakeItem;


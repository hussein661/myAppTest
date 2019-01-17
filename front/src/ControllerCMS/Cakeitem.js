import React from 'react'

export default class Cakeitem extends React.Component {

  state = {
    editmode: false
  }

  toggleEditMode = () => {
    const editMode = !this.state.editMode;
    this.setState({ editMode });
  };

  renderViewMode() {
    const { id, name, catname, description, image, price, deleteCake } = this.props

    return (
      <div className="card">
        <button onClick={() => deleteCake(id)} class="close-thik"></button>
        <h3>{name}</h3>
        <img className="card-img-top" src={image} alt="Card cap" />
        <div className="card-body">
          <p>{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{catname}</li>
          <li className="list-group-item">{price}</li>
          <li className="list-group-item">
            <input
              type="button"
              className="form-btn"
              value="edit"
              onClick={this.toggleEditMode} />
            <input
              type="button"
              className="form-btn"
              value="remove"
              onClick={() => deleteCake(id)} />
              
          </li>
        </ul>
      </div>

    )
  }

  renderEditMode() {
    const { name, catname, description/*, image*/, price } = this.props
    return (
      <div className="editcard">
        <form onSubmit={this.saveitem} className="editform">
          <h1>Editing</h1>
          <label for="text">cake name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            defaultValue={name}
            required />

          <label for="catname">cake category</label>
          <select
            className="form-control"
            id="selectcatname"
            name="catname"
            defaultValue={catname}
            required>
            <option value="">select category</option>
            <option value="offer">offer</option>
            <option value="cake">cake</option>
            <option value="cupcake">cupcake</option>
            <option value="cookies">cookies</option>
          </select>

          <label for="description">Item description</label>
          <textarea
            name="description"
            className="form-control"
            defaultValue={description}
          />

          <label for="image">cake image</label>
          <input
            className="form-control"
            type="file"
            name="image"
            accept="image/*" />      

          <label for="price">price</label>
          <input
            className="form-control"
            type="text"
            name="price"
            defaultValue={price}
            required />
          <input className="form-btn" type="submit" value="Save" />
          <input className="form-btn" type="reset" value="cancel" onClick={this.toggleEditMode} />
        </form>
      </div>
    )
  }

  saveitem = event => {
    const { id, updateCake } = this.props;
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const catname = form.catname.value;
    const description = form.description.value;
    /* const image = form.image.value; */
    const price = form.price.value;
    updateCake(id, { name, catname, description, price });
    this.toggleEditMode();

  }

  render() {
    const { editMode } = this.state;
    if (editMode) {
      return this.renderEditMode();
    } else {
      return this.renderViewMode();
    }
  }
}
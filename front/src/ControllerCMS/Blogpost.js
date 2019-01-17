import React from 'react'

export default class Blogpost extends React.Component {

  state = {
    editmode: false
  }

  toggleEditMode = () => {
    const editMode = !this.state.editMode;
    this.setState({ editMode });
  };

  renderViewMode() {
    const { id, title, author, content, image, date, deletePost } = this.props

    return (
        <div class="media">
          <img alt="blog post header" class="media-object postdivimage" src={image} />
          <div class="media-body">
            <h4 class="media-heading">{title}  <span className="authorspan">By {author}</span></h4>
            <div className="contentDiv">
              <p>{content}</p>
            </div>
            <ul class="list-inline list-unstyled">
            </ul>
            <div className="buttonsofpost">
              <input
                type="button"
                className="form-btn"
                value="edit"
                onClick={this.toggleEditMode} />
              <input
                type="button"
                className="form-btn"
                value="remove"
                onClick={() => deletePost(id)} />

            </div>
          </div>
          <span><i class="glyphicon glyphicon-calendar"></i> {date} </span>
        </div>


    )
  }


  renderEditMode() {
    const { title, author, content } = this.props
    return (
      <div className="editpost">
        <form onSubmit={this.saveitem} className="editformpost">
          <h1>Editing</h1>
          <label for="title">Title</label>
          <input
            className="form-control"
            type="text"
            name="title"
            defaultValue={title}
            required />

          <label for="author">Author</label>
          <input
            className="form-control"
            type="text"
            name="author"
            defaultValue={author}
            required />

          <label for="content">blog content</label>
          <textarea
            name="content"
            className="form-control"
            defaultValue={content}
          />

          <label for="image">post image</label>
          <input
            className="form-control"
            type="file"
            name="image"
            accept="image/*" />
          <input className="form-btn" type="submit" value="Save" />
          <input className="form-btn" type="reset" value="cancel" onClick={this.toggleEditMode} />

        </form>
      </div>
    )
  }


  saveitem = event => {
    const { id, updatePost } = this.props;
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const content = form.content.value;
    updatePost(id, { title, author, content });
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
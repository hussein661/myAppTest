import React from 'react'
import Blogpost from './Blogpost';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


class BlogController extends React.Component {

  state = {
    allposts: [],
    title: "",
    author: "",
    content: "",
    image: "",
    date: ""
  }

  getAllPosts = async () => {

    const response = await fetch(
      `http://localhost:5000/posts/allposts`
    );
    const answer = await response.json();
    if (answer.success) {
      const allposts = answer.result;
      this.setState({ allposts });
      toast(`posts loaded`)
    }
  };

  addPost = async (props) => {
    const { title, author, content, image } = props;
    const response = await fetch(`http://localhost:5000/posts/addpost?title=${title}&author=${author}&content=${content}&image=${image}`);
    const answer = await response.json();
    if (answer.success) {
      const id = answer.result;
      const post = { title, author, content, image, id }
      const allposts = [...this.state.allposts, post]
      toast(`"${title}" by "${author}" created`)

      this.setState({ allposts })

    }
  }

  updatePost = async (id, props) => {
    const response = await fetch(`http://localhost:5000/posts/updatepost/${id}?title=${props.title}&author=${props.author}&content=${props.content}&image=${props.image}`)
    const answer = await response.json();
    if (answer) {
      const allposts = this.state.allposts.map(post => {
        if (post.id === id) {

          const updatedPost = {
            id: post.id,
            title: props.title,
            author: props.author,
            content: props.content,
            image: post.image,
          }
          toast(`post "${updatedPost.title}" updated`)
          return updatedPost
        }
        else {
          return post
        }
      });
      this.setState({ allposts });
    }
  }

  deletePost = async id => {
    const response = await fetch(`http://localhost:5000/posts/deletepost/${id}`);
    const answer = await response.json();
    if (answer) {
      const allposts = this.state.allposts.filter(
        post => post.id !== id
      );
      toast(`post deleted`)
      this.setState({ allposts });
    }
  }

  deleteAllPosts = async () => {
    if (window.confirm("are you sure !?")) {
      const response = await fetch(`http://localhost:5000/posts/deleteall`);
      const answer = await response.json();
      if (answer.success) {
        const allposts = answer.result;
        this.setState({ allposts })
      }
    }
  }


  componentDidMount() {
    this.getAllPosts();
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
    const { title, author, content, image, date } = this.state;
    this.addPost({ title, author, content, image, date });
    this.setState({ title: "", author: "", content: "", image: "", date: "" })
  }


  render() {
    if (localStorage.getItem("token") !== "null") {
      return (
        <div className="">
          <div className="myPar controlall">
            <h1>This is the blog controller</h1>
          </div>
          <div className="linkdivs">
            <a className="controllerNavigation" href="/control">Back to Control Panel</a>
          </div>
          {/* add post form below */}
          <div className="controlup controlall">
            <form onSubmit={this.onSubmit} className="addform">
              <label for="title">Title</label>
              <input className="form-control"
                type="text"
                placeholder="title"
                onChange={event => this.setState({ title: event.target.value })}
                value={this.state.title}
                required />
  
              <label for="author">author</label>
              <input className="form-control"
                type="text"
                placeholder="author"
                onChange={event => this.setState({ author: event.target.value })}
                value={this.state.author}
                required />
  
              <label for="content">Blog content text</label>
              <textarea className="form-control"
                placeholder="content"
                onChange={event => this.setState({ content: event.target.value })}
                value={this.state.content}
              />
  
              <label for="image">Blog image</label>
              <input className="form-control"
                type="file"
                name="image"
                accept="image/*"
                onChange={this.handleimage} />
  
              <input className="form-btn" type="submit" value="add" />
              <input className="form-btn" type="reset" value="cancel" />
              <input type="button" className="form-btn" value="delete all" onClick={this.deleteAllPosts} />
  
            </form>
          </div>
          <hr />
          {/* add post form above */}
          <div className="grid-blog-item">
          {this.state.allposts.map(post =>
          <Blogpost
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          content={post.content}
          image={post.image}
          date={post.date}
          deletePost={this.deletePost}
          updatePost={this.updatePost} />
          )}
          </div>
          <ToastContainer />
        </div>
  
      )
    } else {
      return(<h1 className="notauth">Un authorized</h1>)
    }
   
  }
}

export default BlogController;
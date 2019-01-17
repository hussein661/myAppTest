import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination'




class Blog extends React.Component {

  state = {
    allposts: [],
    currentPosts: [],
    currentPage: null,
    totalPages: null
  }

  onPageChanged = data => {
    const { allposts } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentPosts = allposts.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentPosts, totalPages });
  };

  getAllPosts = async () => {

    const response = await fetch(`http://localhost:5000/posts/allposts`)
    const answer = await response.json()
    if (answer) {
      const allposts = answer.result;
      this.setState({ allposts })
    }
  }

  componentDidMount() {
    this.getAllPosts();
  }

  render() {
    const {
      allposts,
      currentPosts,
      currentPage,
      totalPages
    } = this.state;
    const totalPosts = allposts.length;

    if (totalPosts === 0) return null;

    return (
      <div>
        <Header />
          <div className="pag">
            <div className="">
              {currentPage && (
                <span className="curre">
                  Page <span className="font-weight-bold">{currentPage}</span> /{" "}
                  <span className="font-weight-bold">{totalPages}</span>
                </span>
              )}
            </div>
            <div className="">
              <Pagination
                totalRecords={totalPosts}
                pageLimit={2}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}
              />
            </div>
          </div>
        {currentPosts.map(post =>

          <div className="blogcard">
            <div className="thumbnail"><img className="left" alt="author" src={post.image} /></div>
            <div className="right">
              <h1 className="blogtitle">{post.title}</h1>
              <div className="blogauthor"><img alt="post header" src={post.image} />
                <h2 className="blogauthorname">{post.author}</h2>
              </div>
              <div className="separator"></div>
              <p className="blogtext">{post.content}</p>
            </div>
            <h6 className="blogmonth">{post.date}</h6>

            <Link to={`/posts/${post.id}`} className="fa fa-arrow-down fa-3x readmore"> </Link>
          </div>

        )}
        

        <button title="scroll up" id="scroll"><span></span></button>

        <Footer />
      </div>
    )

  }
}

export default Blog;

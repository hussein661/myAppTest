import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';



class Post extends React.Component {

    state = {
        post: [],
    
    }


    getPost = async id => {
        const response = await fetch(`http://localhost:5000/posts/getpost/${id}`)
        const answer = await response.json()
        if (answer) {
            const post = answer.result;
            this.setState({ post })
        }

    }



    componentDidMount(){
        const id = this.props.match.params.id;
        this.getPost(id);
    }


    render() {

        return (
            <div>
                <Header />

                <div class="postcard">
                    <div class="postimagecontainer"><img alt="post header" class="postimage" src={this.state.post.image} />  </div>
                    <div class="posttextcontainer">
                        <h2 class="autherpost">{this.state.post.author}</h2>
                        <h3 class="postdate1">{this.state.post.date}</h3>
                        <h1 class="posttitle">{this.state.post.title}</h1>
                        <p class="posttext">
                        {this.state.post.content}
                        
                       
                </p>

                    </div>
                </div>
                <Footer />
            </div>


        )
    }


}

export default Post;

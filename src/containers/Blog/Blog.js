import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
//root page
class Blog extends Component {

    state = {
        posts: [], //empty state to be filled
        selectedPostId: null,
        error: false // because things do not always succeed
    }
    //componentDidMount automatically runs anytime a render/change happens
    componentDidMount(){
        axios.get('/posts/') // mess with the get to handle errors
        //get command is being run asynchronously
        .then(response => {
            //We must filter what we see, too much JSON
            const filterPosts = response.data.slice(0, 4); //select first 4 properties
            const updatePosts = filterPosts.map(post => {
                return {
                ...post, //current posts
                author: 'Max'
                }
            });
            //manage state within our response 
            this.setState({posts: updatePosts});
            // console.log(response); uncomment to see JSON in console
        })
        .catch(error => {
           // console.log(error); //catches errors
           this.setState({error: true});
        })
        ;
          //because of not knowing when get is finished, .then promises to return value once finished
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }
    render () {
        let posts = (<p style = {{textAlign:'center', color: 'white'}}>Something went wrong!!!</p>);
            if(!this.state.error){
                 posts = this.state.posts.map(post =>{ //map used to convert JSON into JSX array of elements AUTOMATIC FUNCTION POST
                return <Post  //These properties come from the JSON properties from page
                key = {post.id}
                title = {post.title}
                author = {post.author} 
                clicked = {() => this.postSelectedHandler(post.id)}/>; //stored in Post component
    
                });
            }
        
         
        return (
            <div>
                <section className="Posts">
                    {/* List of posts used to store messages from http requests*/ }
                    {posts};
                     
                     
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
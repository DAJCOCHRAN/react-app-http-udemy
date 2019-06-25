import React, { Component } from 'react';
import axios from 'axios'

import './FullPost.css';
//Full post will be empty then autofill when selected, case of state instance
class FullPost extends Component {
 state = {
     //good to keep null for when state changes we can pass conditional arguements when data fills
     loadedPost: null
 }
 
    componentDidUpdate(){
        //USING SETSTATE WITHIN COMPONENT UPDATE TRIGGERS AN INFINITE LOOP!!!!!
        //target single post from id reference
        if (this.props.id) {//if (this.props.id) checks for arguement if it is true
            if( !this.state.loadedPost || (this.state.loadedPost && (this.state.loadedPost.id !== this.props.id))){
                axios.get('/posts/' + this.props.id) //not posts/1 in get url
                    .then(response => {
                        //  console.log(response); //response documented when clicked
                     this.setState({loadedPost: response.data});
                     } );
        }
        }
        
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id) //target a specific post for deletion which is the same one we needed in get
            .then(response => {
                console.log(response);
            });
    }
    render () {
        let post = <p style = {{textAlign: 'center'}}>Please select a Post!</p>;
        
        if(this.props.id) {post = <p style = {{textAlign: 'center'}}>Loading...!</p>} //will pass when id comes in through request
        if(this.state.loadedPost) { //current state has no props for id, but will pass true once rendered
        post = (
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p> {this.state.loadedPost.body}Content</p>
                <div className="Edit">
                    <button onClick = {this.deletePostHandler} className="Delete">Delete</button> {/* calling deletePostHandler doesnt need () due to it already being in a state? */}
                </div>
            </div>

        );

    }
        return post;
    }
}

export default FullPost;
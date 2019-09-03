import React, { Component } from 'react'
import {connect} from "react-redux"
import * as actions from "../actions"
import {Card,Button} from "react-bootstrap"
import Avatar from 'react-avatar';
import {Link} from "react-router-dom"

class Posts extends Component {

    componentDidMount(){
        this.props.fetchPosts()
    }
    render() {
        const posts=this.props.posts.filter(post=>post.userId===parseInt(this.props.match.params.id))
        console.log(posts)
        const postList=()=>{
            if(posts.length!==0) {
                return posts.map(post=>{
                    return (
                        <div className="col-md-3 mb-4">
                        <Card style={{height:"330px",borderBottom:"3px solid #000000"}}>
 
  <Card.Body>
    <Card.Title className="text-success">{post.title}</Card.Title>
    <Card.Text>
     {post.body}
    </Card.Text>
  </Card.Body>
</Card>
                        </div>
                    )
                })
            }
        
       
        
    }
    return (
        <div className="row mt-5">
           {postList()} 
        </div>
    )
}
}

const mapStateToProps=state=>{
    
    return {
       posts: state.posts
    }
}

export default connect(mapStateToProps,actions)(Posts)

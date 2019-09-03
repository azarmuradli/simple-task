import React, { Component } from 'react'
import {connect} from "react-redux"
import * as actions from "../actions"
import {Card,Button} from "react-bootstrap"
import Avatar from 'react-avatar';
import {Link} from "react-router-dom"


class User extends Component {

    componentDidMount() {
        this.props.fetchUsers()
    }
     userList=()=>{
        if(this.props.users.length!==0) {
            return this.props.users.map(user=>{
                return (
                    <div className="col-md-4 mb-4">
                        <Card>
  
                        <Card.Body>
                        <div className="mb-2">
                            <div className="mb-2 d-flex align-items-center justify-content-between">
                                <h6 className="text-success">Name:</h6>
                                <h6 className="font-weight-normal">{user.name}</h6>
                            </div>
                            <div className="mb-2 d-flex align-items-center justify-content-between">
                                <h6 className="text-success">Username:</h6>
                                <h6 className="font-weight-normal">{user.username}</h6>
                            </div>
                            <div className="mb-2 d-flex align-items-center justify-content-between">
                                <h6 className="text-success">Address:</h6>
                                <h6 className="font-weight-normal">{user.address.city}</h6>
                            </div>
                            <div className="mb-2 d-flex align-items-center justify-content-between">
                                <h6 className="text-success">Company:</h6>
                                <h6 className="font-weight-normal">{user.company.name}</h6>
                            </div>
                        </div>
                        </Card.Body>
   

  <Card.Body>
      <Link to={`/user${user.id}/posts`}>
       <Button>Show Posts</Button>
    </Link>
    <Button onClick={()=>this.props.removeUser(user.id)} className="ml-3 btn-danger">Remove User</Button>
  </Card.Body>
</Card>
                    </div>
                )
            })
        }
        else {
            return <div>xiyar</div>
        }
    }
    


    
    render() {      
        if(this.props.users[0]!==undefined) {
          
                return (
                    <div className="row mt-5">
                        {this.userList()}
                    </div>
                )
            
        }
       else {
           return <div>Loading</div>

       
       
    }
    }
}

const mapStateToProps=state=>{
    
    return {
       users: state.users
    }
}

export default connect(mapStateToProps,actions)(User)

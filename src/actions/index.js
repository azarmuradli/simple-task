import axios from "axios"
import {FETCH_USERS,REMOVE_USER,FETCH_POSTS} from "./types"


export const fetchUsers=()=>{
    const response=axios.get("https://jsonplaceholder.typicode.com/users")
    return {
        type:FETCH_USERS,
        payload:response
    }
}
export const removeUser=id=>{
    return {
        type:REMOVE_USER,
        payload:id
    }
}
export const fetchPosts=()=>{
    const response=axios.get("https://jsonplaceholder.typicode.com/posts")
    return {
        type:FETCH_POSTS,
        payload:response
    }
}

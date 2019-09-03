import {combineReducers} from "redux"
import Users from "./users.js"
import Posts from "./posts.js"

export default combineReducers({
    users:Users,
    posts:Posts
})
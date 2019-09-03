import {FETCH_USERS,REMOVE_USER} from "../actions/types"

export default (state=[],action)=>{
   switch(action.type) {
       case FETCH_USERS:
           return state=[...action.payload.data]
       case REMOVE_USER:
           return state=state.filter(user=>user.id!==action.payload)
           
       default:
           return state
           
   }
}
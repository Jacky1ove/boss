import axios from 'axios'

const USERLIST = 'USERLIST'
const initState = {
    userList:[]
}
export const chatUser = (state=initState,action) => {
    switch(action.type){
        case USERLIST:
            return {...state,userList:action.data}
        default:
            return state
    }
}

const userList = (data) => {
  return {type:USERLIST,data:data}
}

export const getUserList = (type) => {
  return dispatch=>{
    axios.get('/user/list?type='+type)
    .then(res=> {
        if(res.status == 200){
            dispatch(userList(res.data.data))
        }
    })
  }
}



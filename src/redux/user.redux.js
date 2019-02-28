import axios from 'axios'
import { getRedirectPath } from '../util'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
    redirectTo:'',
    msg:'',
    username:'',
    type:'',
    desc:'',
}
export const user = (state=initState,action) => {
    console.log(action)
    switch (action.type) {
        // case REGISTER_SUCCESS:
        //     return {...state,isAuth:true,redirectTo:getRedirectPath(action.data),...action.data}
        // case LOGIN_SUCCESS:
        //     return {...state,isAuth:true,redirectTo:getRedirectPath(action.data),...action.data}
        case UPDATE_SUCCESS:
        console.log({...state,redirectTo:getRedirectPath(action.data),...action.data})
            return {...state,redirectTo:getRedirectPath(action.data),...action.data}
        case LOAD_DATA:
            return {...state,...action.data}
        case ERROR_MSG:
            return {...state,isAuth:false,msg:action.msg}
        default:
            return state
    }
};

// export const registerSuccess = (data) => {
//     return {type:REGISTER_SUCCESS,data:data}
// };
// export const loginSuccess = (data) => {
//     return {type:LOGIN_SUCCESS,data:data}
// };
export const updateSuccess = (data) => {
    return {type:UPDATE_SUCCESS,data:data}
}
export const errorMsg = (msg) => {
    return {type:ERROR_MSG,msg:msg}
};
export const loadData = (data) => {
    return {type:LOAD_DATA,data:data}
}

export const login = ({username,psw}) => {
  if(!username || !psw){
      return errorMsg('用户名密码必须输入')
  }

  return dispatch => {
    axios.post('/user/login',{username,psw})
    .then(res =>{
        if(res.status === 200 && res.data.code ===0){
            dispatch(updateSuccess(res.data))
        }else{
            dispatch(errorMsg(res.data.msg))
        }
    })
  }
}

export const register = ({username,psw,repeatPsw,type}) => {
    if(!username || !psw){
        return errorMsg('用户名密码必须输入')
    }
    if(psw !== repeatPsw){
        return errorMsg('密码不一致')
    }

    return dispatch => {
        axios.post('/user/register',{username,psw,type})
        .then(res => {
            if(res.status === 200 && res.data.code ===0){
                dispatch(updateSuccess({username,psw,type}))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
};

export const updateUser = (data) => {
    return dispatch=>{
        axios.post('/user/update',data)
            .then(res => {
                console.log(res)
                dispatch(updateSuccess(res.data.data))
            })
    }
}





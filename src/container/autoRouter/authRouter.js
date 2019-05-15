import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadData } from '../../redux/user.redux'

@connect(
    null,
    {loadData}
)
@withRouter//react中非路由组件是没有this.props的，因此我们可以用withRouter来包裹该路由，使其具有this.props属性
class AuthRouter extends React.Component{
    componentDidMount(){
        axios.get('/user/info').then(res => {
            if(res.status == 200){
                if(res.data.code === 0){    
                    console.log('**********')
                    this.props.loadData(res.data.data)
                }else{
                }
            }
        })

    }
    render(){
        return null
    }
}

export default AuthRouter
import React from 'react'
import LogoImg from '../../component/logo/logo'
import { List,InputItem,WingBlank,WhiteSpace,Button } from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux' 
import { login } from '../../redux/user.redux'

@connect(
    state => state.user,
    {login}
)
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            psw:''
        }
    }
    handleChange = (key,v) => {
        this.setState({
            [key]:v
        })
    }
    toRegister(){
        this.props.history.push('/register')
    }
    login = () =>{
        console.log(this.state)
        this.props.login(this.state)
    }
    render(){
        return (
            <div>
                <LogoImg></LogoImg>  
                <WingBlank>
                    <List>
                        {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
                        <InputItem
                            onChange = {v => this.handleChange('username',v)}
                        >用户名</InputItem>
                        <WhiteSpace />
                        <InputItem
                            onChange = {v => this.handleChange('psw',v)}
                        >密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.login}>登陆</Button>
                    <WhiteSpace />
                    <Button onClick={this.toRegister.bind(this)} type='primary'>注册</Button>
                </WingBlank>
            </div> 
        )
    }
}

export default Login
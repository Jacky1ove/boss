import React from 'react'
import LogoImg from '../../component/logo/logo'
import { List,InputItem,WingBlank,WhiteSpace,Button,Radio } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'

@connect(
    state => state.user,
    {register}
)
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userInfo:{
                username:'',
                psw:'',
                repeatPsw:'',
                type:'genius'
            }
        }
    }
    componentDidMount(){
        console.log(this.props)
    }
    handleChange = (key,v) => {
        console.log(key,v)
        this.setState({
            userInfo:Object.assign({},this.state.userInfo,{[key]:v})
        })
    }
    register = () => {
        this.props.register(this.state.userInfo)
        // console.log(this.state.userInfo)
    }
    render(){
        const RadioItem = Radio.RadioItem; 
        return (
            <h1>
                <LogoImg></LogoImg>
                <WingBlank>
                    {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
                    <List>
                        <InputItem
                            onChange={v => this.handleChange('username',v)}
                        >用户名</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type="password"
                            onChange={v => this.handleChange('psw',v)}
                        >密码</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type="password"
                            onChange={v => this.handleChange('repeatPsw',v)}
                        >确认密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <RadioItem
                     checked={this.state.userInfo.type=='genius'}
                     onClick={() => this.handleChange('type','genius')}
                    >牛人</RadioItem>
                    <RadioItem
                     checked={this.state.userInfo.type=='boss'}
                     onClick={() => this.handleChange('type','boss')}
                    >Boss</RadioItem>
                    <WhiteSpace />
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </h1>
        )
    }
}

export default Register
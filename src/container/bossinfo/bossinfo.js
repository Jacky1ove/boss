import React from 'react'
import { NavBar,Icon,InputItem,TextareaItem,Button } from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import AvatarSelect from '../../component/avatarselect/avatarselect'
import { connect } from 'react-redux'
import { updateUser } from '../../redux/user.redux'

@connect(
    state=>state.user,
    {updateUser}
)
class BossInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bossInfo:{}
        }
    }
    handleChange = (key,val) => {
        this.setState({
            bossInfo:Object.assign({},this.state.bossInfo,{[key]:val})
        })
    }
    saveBossInfo = () => {
        this.props.updateUser(this.state.bossInfo)
    }
    render(){
        return(
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
                <NavBar
                mode="dark"
                leftContent="Back"
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
                >NavBar</NavBar>
                <AvatarSelect avatarSelect={(v)=>{this.setState({bossInfo:Object.assign({},this.state.bossInfo,{avatar:v.text})})}}></AvatarSelect>
                <InputItem onChange={(v) => this.handleChange('title',v)}>招聘职位</InputItem>
                <InputItem onChange={(v) => this.handleChange('company',v)}>公司名称</InputItem>
                <InputItem onChange={(v) => this.handleChange('money',v)}>职位薪资</InputItem>
                <TextareaItem onChange={(v) => this.handleChange('desc',v)} title="职位要求" autoHeight cols={3}></TextareaItem>

                <Button type="primary" onClick={this.saveBossInfo}>保存</Button>
            </div>
        )
    }
}

export default BossInfo
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
class GeniusInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            geniusInfo:{}
        }
    }
    handleChange = (key,val) => {
        this.setState({
            geniusInfo:Object.assign({},this.state.geniusInfo,{[key]:val})
        })
    }
    saveGeniusInfo = () => {
        this.props.updateUser(this.state.geniusInfo)
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
                <AvatarSelect avatarSelect={(v)=>{this.setState({geniusInfo:Object.assign({},this.state.geniusInfo,{avatar:v.text})})}}></AvatarSelect>
                <InputItem onChange={(v) => this.handleChange('title',v)}>应聘职位</InputItem>
                <TextareaItem onChange={(v) => this.handleChange('desc',v)} title="个人简介" autoHeight cols={3}></TextareaItem>

                <Button type="primary" onClick={this.saveGeniusInfo}>保存</Button>
            </div>
        )
    }
}

export default GeniusInfo
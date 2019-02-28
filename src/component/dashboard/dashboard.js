import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import {Switch,Route} from 'react-router-dom'
import Boss from '../boss/boss.js'
import Genius from '../genius/genius'

function Message(){
    return 'Message'
}
function Me(){
    return 'Me'
}
@connect(
    state=>state.user
)
class Dashboard extends React.Component{
    render(){
        const user = this.props
        console.log(user)
        const navList = [
            {
                path:'/boss',
                text:'牛人',
                icon:'boss',
                title:'牛人列表',
                component:Boss,
                hide:user.data.type=='boss'
            },
            {
                path:'/genius',
                text:'Boss',
                icon:'genius',
                title:'Boss列表',
                component:Genius,
                hide:user.data.type=='genius'
            },
            {
                path:'/msg',
                text:'消息',
                icon:'message',
                title:'消息列表',
                component:Message,
                hide:true
            },
            {
                path:'/my',
                text:'个人中心',
                icon:'my',
                title:'个人中心',
                component:Me,
                hide:true
            }
        ]
        return(
            <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                <NavBar className="fixd-header" mode="dark">{navList.find(v=>v.path == this.props.location.pathname).title}</NavBar>
                <div style={{flex:'1'}}>
                    <Switch>
                        {
                            navList.map((item)=>{
                                return(
                                    <Route key={item.path} path={item.path} component={item.component}></Route>
                                )
                            })
                        }
                    </Switch>
                </div>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}

export default Dashboard
import React from 'react'
import { Result,List,Button,WhiteSpace } from 'antd-mobile'
import {connect} from 'react-redux'
import {loadData} from '../../redux/user.redux'

@connect(
    state=>state,
    {loadData}
)
class User extends React.Component{
    componentWillMount(){
        this.props.loadData()
    }
    logout = () => {
    }
    render(){
        const Item = List.Item;
        const Brief = Item.Brief
        console.log(this.props)
        let userInfo = this.props.user
        return(
            <div>
            {(userInfo.avatar && userInfo.username && userInfo.company && userInfo.desc && userInfo.title) ? 
            <div>
                <Result
                    img={<img width="80" src={require(`../../../public/assets/${userInfo.avatar}.png`)}/>}
                    title={userInfo.username}
                    message={userInfo.type == 'boss'?userInfo.company:null}
                />
                <List renderHeader={() => '简介'}>
                    <Item>
                        {userInfo.title}
                        {userInfo.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
                    </Item>
                </List>
                <WhiteSpace></WhiteSpace>
                <Button onClick={this.logout}>退出登录</Button>
            </div>
            : null}
            </div>
        )
    }
}

export default User
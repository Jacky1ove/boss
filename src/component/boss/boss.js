import React from 'react'
import './boss.css'
import { WingBlank,WhiteSpace,Card } from 'antd-mobile'
import { connect } from 'react-redux'
import {getUserList} from '../../redux/chatuser.redux'

@connect(
    state=>state.chatUser,
    {getUserList}
)
class Boss extends React.Component{
    constructor(props){
        super(props)
       
    }
    componentDidMount(){
        this.props.getUserList('genius')
    }
    render(){
        return (
            <WingBlank>
                {this.props.userList.length === 0?null:this.props.userList.map((item)=>{
                    return(
                        item.avatar?(
                            <div>
                                <Card className="card" key={item._id}>
                                    <Card.Header
                                    title={item.username} 
                                    thumb={require(`../../../public/assets/${item.avatar}.png`)} 
                                    extra={<span>{item.title}</span>}
                                    ></Card.Header>
                                    <Card.Body>{item.desc}</Card.Body>
                                </Card>
                                <WhiteSpace></WhiteSpace>
                            </div>
                        ):null
                    )
                })}
            </WingBlank>
        )
    }
}

export default Boss
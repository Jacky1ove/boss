import React from 'react'
import axios from 'axios'
import './boss.css'
import { WingBlank,WhiteSpace,Card } from 'antd-mobile'
class Boss extends React.Component{
    constructor(props){
        super(props)
        this.state={
            geniusList:[]
        }
    }
    componentDidMount(){
        axios.get('/user/list?type=genius')
            .then(res=> {
                console.log(res)
                if(res.status == 200){
                    this.setState({
                        geniusList:res.data.data
                    })
                }
            })
    }
    render(){
        return (
            <WingBlank>
                {this.state.geniusList.map((item)=>{
                    return(
                        item.avatar?(
                            <Card key={item._id}>
                                <Card.Header
                                 title={item.username} 
                                 thumb={require(`../../../public/assets/${item.avatar}.png`)} 
                                 extra={<span>{item.title}</span>}
                                ></Card.Header>
                                <Card.Body>{item.desc}</Card.Body>
                            </Card>
                        ):null
                    )
                })}
            </WingBlank>
        )
    }
}

export default Boss
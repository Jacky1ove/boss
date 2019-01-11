import React from 'react'
import { Grid,List } from 'antd-mobile'
class AvatarSelect extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            avatarSelect:{}
        }
    }

    render(){
        const avatarList = ['d1','d2','d3','d4','d5','d6','d7','d8','d9']
        const data = avatarList.map((_val, i) => ({
            icon: require(`../../../public/assets/${_val}.png`),
            text: _val,
          }));
        
          const gridHeader = this.state.avatarSelect.text?
                            <div>
                                <span>已选择头像</span>
                                <img style={{width:'50px'}} src={this.state.avatarSelect.icon} alt=""/>
                            </div>
                            :'请选择头像'
        return(
            <List renderHeader={()=>gridHeader}>
                <Grid data={data} columnNum={3} 
                    onClick={v=>{
                        console.log(v)
                        this.setState({
                            avatarSelect:v
                        })
                        this.props.avatarSelect(v)
                    }}
                />
            </List>
        )
    }
}

export default AvatarSelect
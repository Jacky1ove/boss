import React from 'react'
import PropTypes from 'prop-types'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

@withRouter
class NavLink extends React.Component{
    static propTypes = {
        data:PropTypes.array.isRequired 
    }
    render(){
        console.log(this.props.data)
        const navList = this.props.data.filter((item)=>{
            if(item.hide){
                return item
            }
        })
        console.log(navList)
        return(
            <div>
                <TabBar>
                    {navList.map(v=>(
                        <TabBar.Item
                            key={v.path}
                            title={v.text}
                            selected={this.props.location.pathname == v.path}
                            icon={<img src={require(`./tabbar-icon/${v.icon}.png`)}></img>}
                            selectedIcon={<img src={require(`./tabbar-icon/${v.icon}.png`)}></img>}
                            onPress={()=>{
                                this.props.history.push(v.path)
                            }}
                        >
                        </TabBar.Item>
                    ))}
                </TabBar>
            </div>
        )
    }
}

export default NavLink
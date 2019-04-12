import React,{Component} from 'react';
import axios from 'axios';
import { NavBar, Icon, List, Badge} from 'antd-mobile';
import style from '../main.css'
import { IncreaseNum,DecreaseNum} from '../actions'
import { connect } from 'react-redux';
const mapStateToProps = state=>{
  return {
    carts: state.carts
  }
}
class TabDetail extends Component{

  render(){
    const { IncreaseNum,DecreaseNum}=this.props
    if(this.props.carts.length==0){
      return (
        <div>
        <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() =>this.props.history.push('/products')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >购物车</NavBar>
          <div style={{padding:30}}>
              购物车为空，快去购物吧
          </div>
        </div>
    )
    }else{
      return (
        <div>
        <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() =>this.props.history.push('/products')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >购物车</NavBar>
            {this.props.carts.map((value,index)=>{
              return(
                <List key={index}>
                <List.Item  >
                  <h3 style={{ marginLeft: 12 }}>
                    {value.name}<Badge text="HOT" hot style={{ marginLeft: 12 }} /> <Badge text={'new'} style={{ marginLeft: 12 }} />
                  </h3>
                </List.Item>
                <List.Item>
                  <div > <img style={{ width: '150px', height: '100px', marginRight: '15px' }} src={value.img} alt="" /> </div>
                </List.Item>
                <List.Item>
                  <p style={{ lineHeight: '20px', textAlign: "left" }}>
                    {value.text}
                  </p>
                </List.Item>
                <List.Item>

                  数量 <span style={{ marginLeft: 250 }}><button onClick={() => {this.props.IncreaseNum(value)}}>+</button>{value.quantity} <button onClick={() => {this.props.DecreaseNum(value)}}>-</button></span>

                </List.Item>
                <List.Item
                  extra={<Badge text={10000} overflowCount={9999} />}
                >
                  评论
                </List.Item>

                </List>)
            })}


        </div>
      );
    }
  }
}
export default connect(mapStateToProps,{ IncreaseNum,DecreaseNum})(TabDetail);
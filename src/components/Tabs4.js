import { List } from 'antd-mobile';
import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import {NavLink} from 'react-router-dom'
const Item = List.Item;
const Brief = Item.Brief;

export default class ListExample extends React.Component {
  state = {
    disabled: false,
  }

  render() {
    return (<div>
        <NavBar
        mode="light"
        onLeftClick={()=> this.props.history.push('/home')
      }
      >我的</NavBar>
      <List>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >我的钱包</Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          onClick={() => {}}
          arrow="horizontal"
        >
          用户设置
        </Item>
        <NavLink to='/products/cart'>
        <Item
        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
        onClick={() => {}}
        arrow="horizontal"
      >
       我的购物车
      </Item>
      </NavLink>
      <NavLink to='/login'>
        <Item
        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
        onClick={() => {}}
        arrow="horizontal"
      >
      登录
      </Item>
      </NavLink>
      </List>

    </div>);
  }
}

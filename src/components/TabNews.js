import React,{Component} from 'react';
import axios from 'axios';
import { NavBar, Icon, List, Badge} from 'antd-mobile';
import style from '../main.css'
export default class TabDetail extends Component{
state={
    list:[]
}
  componentDidMount(){
    axios({
      url   : `http://localhost:3000/news/${this.props.match.params.id}`,
      method: 'get'
    }).then(res=>{
     this.setState({
         list:res.data
     })
    })
  }
  render(){
    return (
      <div>
      <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => this.props.history.push('/news')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >新闻详情</NavBar>
<div>
  <List>
    <List.Item  >

      <h3 style={{ marginLeft: 12}}>{this.state.list.title}<Badge text="HOT" hot style={{ marginLeft: 12 }} /> <Badge text={'new'} style={{ marginLeft: 12 }} /></h3>

    </List.Item>
    <List.Item>

    <div > <img style={{width:'400px',height:'100px', marginRight: '15' }} src={this.state.list.bg} alt="" /> </div>
 </List.Item>
    <div style={{ padding: ' 15',lineHeight:'20px',textIndent:38,textAlign:"left"}}>
        {this.state.list.content}
    </div>
    <List.Item
      extra={<Badge text={10000} overflowCount={9999} />}
    >
      评论
    </List.Item>
    <List.Item
    extra={<Badge text={1000} overflowCount={999} />}
  >
    转发
  </List.Item>


  </List>



</div>


      </div>
    )
  }
}


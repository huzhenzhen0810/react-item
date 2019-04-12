import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import style from '../main.css'
import { NavBar, Icon,Badge } from 'antd-mobile';
import { Grid } from 'antd-mobile';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import axios from 'axios';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            userlist:[],
            name: '',
            password:''
           }

      }
    genData=()=> {
      axios({
        url:'http://localhost:3000/users',
        method:'get'
      }).then(res=>{
          console.log(res.data)
        this.setState({
            userlist:[...this.state.userlist,...res.data]
        })

      });
    }
    onChangename = (name) => {
        this.setState({
            name
        });
      }
    onChangepass= (password) => {
        this.setState({
            password
        });
      }
    check=()=>{
var namearr=this.state.userlist[0].name;
var passarr=this.state.userlist[0].password
console.log(namearr)
        if(this.state.name && this.state.password){
            if(this.state.name==namearr && this.state.password==){
                console.log(111)
            }else{
                console.log(222)
            }
        }
    }
    componentDidMount(){
        this.genData()
    }
  render() {
    const { userlist } = this.props;
    return (
      <div >
        <NavBar mode= "dark">登录</NavBar>
        <div>

        <List renderHeader={() => 'Confirm when typing'}>
        <InputItem
          placeholder="input your phone"
          onChange={this.onChangename}
          value={this.state.name}
        >用户名</InputItem>
        <InputItem
          placeholder="input your phone"
          onChange={this.onChangepass}
          value={this.state.password}
        >密码</InputItem>
      </List>
      <button onClick={this.check}>登录</button>
        </div>
      </div>
    );
  }

}
export default Login


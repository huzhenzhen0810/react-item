
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { ListView } from 'antd-mobile';
import { connect } from 'react-redux';
import axios from 'axios';
import {NavLink} from 'react-router-dom'
import { NavBar, Icon,Badge } from 'antd-mobile';


export default class Tabs2 extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({

      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state={
      list:[],
      dataSource,
      page:1
    }

  }
 genData=()=> {
  axios({
    url:`http://localhost:3000/news?_page=${this.state.page}&_limit=5&_sort=id&_order=desc`,
    method:'get',
  }).then(res=>{
    this.setState({
        list: [...this.state.list, ...res.data],
        page: this.state.page + 1
    })
  })
}


  componentDidMount() {
    this.genData();
  }
  onEndReached = () => {
    this.genData();
  }
  renderRow = (rowData,sectionID,rowID)=>{
    var productDetailUrl = `/news/${rowData.id}`
    return (
      <NavLink to={productDetailUrl}>

        <div key={rowID} style={{ padding: '0 15px' }}>
            <div
              style={{
                lineHeight  : '50px',
                color       : '#000',
                fontSize    : 18,
                borderBottom: '1px solid #F6F6F6',
                textAlign:'left'
              }}
            >{rowData.title}<Badge text={'new'} style={{ marginLeft: 12 }} /></div>
            <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
              <img style={{ height: '64px', marginRight: '15px' }} src={rowData.img} alt="" />
              <div style={{ lineHeight: 1}}>
                <div style={{ marginBottom: '8px',color:'#888',lineHeight:'20px',textAlign:'left', }}>{rowData.text}</div>


              </div>
            </div>
        </div>
      </NavLink>
    )
  }
     render() {
    return (

      <ListView
        dataSource = {this.state.dataSource.cloneWithRows(this.state.list)}
        renderRow  = {(rowData, sectionID, rowID, highlightRow) => this.renderRow(rowData,sectionID,rowID)}
        style      = {{
          height  : document.documentElement.clientHeight - 50,
          overflow: 'auto',
        }}
        onEndReached          = {this.onEndReached}
        onEndReachedThreshold = {10}
      />
    );

  }
}



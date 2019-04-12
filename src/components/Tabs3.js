
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { ListView } from 'antd-mobile';
import { connect } from 'react-redux';
import axios from 'axios';

import { NavBar, Icon,Badge ,List,Card, WingBlank, WhiteSpace} from 'antd-mobile';
import carticon from '../assets/cart.svg'
import scicon from '../assets/cs.svg'

import {addToCart } from '../actions'

const mapStateToProps = (state)=>{
  return {
      carts   : state.carts
  }
}

 class Tabs3 extends React.Component {
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
    url:`http://localhost:3000/products?_page=${this.state.page}&_limit=5&_sort=id&_order=desc`,
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
    const {addToCart,carts} = this.props

    return (
        <div key={rowID} style={{ padding: '0 15px' }}>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title={rowData.name}
                        ></Card.Header>
                        <Card.Body style={{textAlign:"left",}}>
                            <div>
                            <div>
                            <div style={{display:'inline-block', width:330,fontSize:14,}}>
                            {rowData.text}<Badge text={'new'} style={{ marginLeft: 12 }} />
                            <div style={{padding:10,fontSize:20,color:'red'}}>￥{rowData.price.number}</div>
                            </div>
                            </div>
                            <img style={{display:'inline-block' }} src={rowData.img} alt="" /></div>
                        </Card.Body>

                        <Card.Footer content={<div style={{ background: `url(${scicon}) left center /  18px 18px no-repeat`,textAlign:'center'}}><button style={{border:0,backgroundColor:'#ccc'}}>点击收藏</button></div>}   extra={<div style={{ background: `url(${carticon}) left center /  18px 18px no-repeat`,textAlign:'center'}}><button style={{border:0,backgroundColor:'#ccc'}} onClick={(product)=>this.props.addToCart(rowData)} >加入购物车</button></div>} />

                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
        </div>

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


export default connect(mapStateToProps,{addToCart})(Tabs3);

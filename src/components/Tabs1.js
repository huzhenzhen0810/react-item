import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import style from '../main.css'
import { connect } from 'react-redux';
import { Carousel, WingBlank } from 'antd-mobile';
import { NavBar, Icon,Badge } from 'antd-mobile';
import { Grid } from 'antd-mobile';
import { fetchListcaroursel} from '../actions/caroursel'
import axios from 'axios';


const mapStateToProps = (state)=>{
    return {
         caroursel:state.caroursel
    }
}
class Tabs1 extends React.Component {
    state={
      slideIndex:0,
      page:1,
      list:[],
      newlist:[],
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
      });
      axios({
        url:`http://localhost:3000/news?_page=${this.state.page}&_limit=4&_sort=id&_order=desc`,
        method:'get',
      }).then(res=>{
        this.setState({
          newlist: [...this.state.newlist, ...res.data],
            page: this.state.page + 1
        })
      })
    }


    componentDidMount(){
        this.props.fetchListcaroursel();
        this.genData()
    }
  render() {
      const {caroursel} = this.props;

    return (
      <div >
      <NavBar mode= "dark">首页</NavBar>

      <WingBlank>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay={true}
          infinite
          beforeChange = {(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange  = {index => {this.setState({ slideIndex: index })}}
        >
          {caroursel.map((val,index) => (
            <a
              key   = {val.id}
              href  = {val.url}
               style = {{ display: 'inline-block', width: '100%', height: 100,position: 'relative',top: this.state.slideIndex === index ? -10 : 0, boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',}}
            >

              <img
               src   = {val.img}
                 alt   = {val.title}
                style={{ width: '100%', verticalAlign: 'top' }}

              />
            </a>
          ))}
        </Carousel>
      </WingBlank>


      <Grid data={this.state.list}
      columnNum={3}
      renderItem={dataItem => (
        <div style={{ padding: 12.5 }}>
          <img src={dataItem.icon} style={{ width: 75, height: 75 }} alt="" />
          <div style={{ color: '#888', fontSize: 18, marginTop: 12 }}>
            <span>{dataItem.text}</span>
          </div>
        </div>
      )}
    />



        <div>
        {this.state.newlist.map((value,index)=>{
return(
        <div key={index} style={{ padding: '0 15px' }}>
        <div
          style={{
            lineHeight  : '50px',
            color       : '#000',
            fontSize    : 18,
            borderBottom: '1px solid #F6F6F6',
            textAlign:'left'
          }}
        >{value.title}<Badge text={'new'} style={{ marginLeft: 12 }} /></div>
        <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
          <img style={{ height: '64px', marginRight: '15px' }} src={value.img} alt="" />
          <div style={{ lineHeight: 1}}>
            <div style={{ marginBottom: '8px',color:'#888',lineHeight:'20px',textAlign:'left', }}>{value.text}</div>


          </div>
        </div>
    </div>
      )   })}
        </div>




      </div>
    );
  }

}
export default connect(mapStateToProps,{fetchListcaroursel})(Tabs1);


import React from 'react'
import ReactDOM from 'react-dom';
import { TabBar } from 'antd-mobile';
import style from './main.css'
import 'antd-mobile/dist/antd-mobile.css';
import homeicon from './assets/home.svg';
import newsicon from './assets/news.svg';
import productsicon from './assets/products.svg';
import mineicon from './assets/mine.svg';
import { Provider } from 'react-redux';
import store from './store'
import { HashRouter as Router,Route,Switch ,NavLink} from 'react-router-dom'
import Tabs1 from './components/Tabs1'
import Tabs2 from './components/Tabs2'
import Tabs3 from './components/Tabs3'
import Tabs4 from './components/Tabs4'
import TabDetail from './components/TabNews'
import TabCart from './components/TabCart'
import Login from './components/Login'



class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
    return (
       <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
          <Switch>
                  <Route path="/home" component={Tabs1} />
                  <Route path="/news" component={Tabs2} exact/>
                  <Route path="/products" component={Tabs3} exact/>
                  <Route path="/mine" component={Tabs4}/>
                  <Route path="/news/:id" component={TabDetail}/>
                  <Route path="/products/:id" component={TabCart} />
                  <Route path="/login" component={Login} />
                  <Route  component={Tabs1}/>
          </Switch>

       </div>
    );
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${homeicon}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${homeicon}) center center /  21px 21px no-repeat`}}
            />
            }
            selected={this.state.selectedTab === 'homeTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'homeTab',
              },()=>{
                this.props.history.push('/home')
              });
            }}
            data-seed="logId"
          >
            {this.renderContent('Life')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${newsicon}) center center /  21px 21px no-repeat`}}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${newsicon}) center center /  21px 21px no-repeat` }}
              />
            }
            title="新闻"
            key="Koubei"
            badge={'new'}
            selected={this.state.selectedTab === 'newsTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'newsTab',
              },()=>{
                this.props.history.push('/news')
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('Koubei')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${productsicon}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${productsicon}) center center /  21px 21px no-repeat` }}
              />
            }
            title="商品"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'productsTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'productsTab',
              },()=>{
                this.props.history.push('/products')
              });
            }}
          >
            {this.renderContent('Friend')}
          </TabBar.Item>
          <TabBar.Item
           icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${mineicon}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${mineicon}) center center /  21px 21px no-repeat` }}
              />
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'mineTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'mineTab',
              },()=>{
                this.props.history.push('/mine')
              });
            }}
          >
            {this.renderContent('My')}
          </TabBar.Item>
        </TabBar>

      </div>
    );
  }
}
class Index extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <Router>
                   <div>
                    <Route path="/" component={TabBarExample} />

                   </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('app'));
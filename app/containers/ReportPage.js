import React, { Component } from 'react';
type Props = {};
import { Table, Button, Icon, Modal, Select, Form, Input, InputNumber, Popconfirm,Layout,Menu } from 'antd'
const Search = Input.Search;
const FormItem = Form.Item;
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const { Header, Sider, Content } = Layout;

import style from '../assets/styles/stock.css'

import moment from 'moment'
import { history } from "../store/configureStore";
class ReportPage extends Component<Props> {
  props: Props
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    
  }
  handleClick = (e) => {
    console.log("handleClick");

    switch (e.key) {
      case '0':
        history.push('/report/dashboard')
        break;
      case '1':
        history.push('/report/dashboard')
        break;
      // case '2':
      //   history.push('/price')
      //   break;
      // case '3':
      //   history.push('/product');
      //   break;
      // case '4':
      //   history.push('/stock');
      //   break;
      // case '5':
      //   history.push('/client');
      //   break;


    }
  }

  render(){

    return (
      <div>
        <div className='page-header' >
          <div className='header-h'>Raporlar</div>
          <div style={{ display: 'flex' }}>



          </div>
        </div>
        <div className='page-body'>
          <Layout>
            <Sider>
              <div className="logo" />
              <Menu
                  theme="light"
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  onClick={this.handleClick}
              >
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>Summary Dashboard</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>Stock Report</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span>nav 3</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                Header
              </Header>
              <Content >
                Content
              </Content>
            </Layout>
          </Layout>


        </div>

      </div>

    );
  }
}
function mapStateToProps({  }) {

  return {

  }
}

const ConnectedPage = connect(mapStateToProps, {})(ReportPage);
const WrappedPage = Form.create()(ConnectedPage);
export { WrappedPage as ReportPage }

import React from 'react';
import AppHome from './views/Home';
import { AppHeader, AppFooter } from './components/Common';
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import './App.scss';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className='mainLayout'>
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Styles }  from './style';
import 'antd/dist/antd.css';

import TodoApp from './TodoMain/TodoApp';
import TodoBar from './TodoMain/TodoBar';
import TodoForm from './TodoMain/TodoForm';
import TodoList from './TodoMain/TodoList';

import { Layout } from 'antd';

function App() {

  const { Header, Footer, Content } = Layout;

  return <>
    <TodoApp>
      <Layout>
        <Header style={Styles.Header}>
          <TodoBar />
        </Header>
        <Content className="site-layout" style={Styles.Content}>
            <TodoForm />
            <TodoList />
        </Content>
        {/* <Footer></Footer> */}
      </Layout>
    </TodoApp>
  </>;
}

export default App;

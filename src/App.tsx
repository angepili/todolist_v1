import React from 'react';
import './App.css';
import { Styles }  from './style';
import 'antd/dist/antd.css';

import TodoApp from './components/Main';
import TodoBar from './components/Bar';
import TodoForm from './components/Form';
import TodoList from './components/List';

import { Layout } from 'antd';

import useItems from './hooks/useItems';

// import db from './utils/firebase';

// db.collection("users").add({
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// })
// .then(function(docRef:any):void {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error:string) {
//   console.error("Error adding document: ", error);
// });

// db.collection("users").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       console.log(doc.id,doc.data());
//   });
// });

function App() {

  const { Header, 
    // Footer, 
    Content } = Layout;

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

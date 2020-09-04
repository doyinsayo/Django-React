import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import {BrowserRouter as Router, Route} from 'react-router-dom';
import BaseRouter from './routes'
import CustomLayout from './containers/Layout'
import ArticleList from './containers/ArticleListView'

function App() {
  return (
    <div className="App">
       <Router>
          <CustomLayout>
             <BaseRouter/>
          </CustomLayout>
       </Router>
      </div>
  );
}

export default App;

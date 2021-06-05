import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen/index';
import Error404Screen from './screens/Error404Screen/';

const App = () => {
  // setting default headers and base URL
  // const userLogin = useSelector((state) => state.userLogin);
  const token = '';
  axios.defaults.baseURL = 'base-url-goes-here';
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomeScreen} />

          {/* <Route path='*' component={Error404Screen} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;

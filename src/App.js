import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {
  Navbar,
  HomePage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from './components';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Navbar />
        </nav>

        <main className="main">
          <div className="container">
          <Layout>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/exchanges" component={Exchanges} exact />
              <Route
                path="/cryptocurrencies"
                component={Cryptocurrencies}
                exact
              />
              <Route path="/crypto/:coinId" component={CryptoDetails} exact />
              <Route path="/news" component={News} exact />
            </Switch>
          </Layout>
          </div>

          <footer className="footer">
            <Typography.Title
              level={5}
              style={{ color: '#fff', textAlign: 'center' }}
            >
              CryptoHub <br />
              &copy; {new Date().getFullYear()} All rights reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/news">News</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Space>
          </footer>
        </main>
      </div>
    </Router>
  );
};

export default App;

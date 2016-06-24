'use strict';
import React from 'react'
import { Route,Redirect,IndexRoute } from 'react-router';
import App from './components/App.react';
import Index from './components/Index.react';
import Login from './components/Login.react';
// import Category from './components/Category.react';
import UserCenter from './components/UserCenter.react';
import PriceEnquiry from './components/PriceEnquiry.react';

import Error from './components/Error.react';

export default (
        <Route path="/" component={App}>
            <Route path="/login" component={ Login } />
            <Route component={Index}>
                <Route path="Index/category/:categoryId" component={Error}/>
            </Route>
            // <Redirect from="/index" to="index/category/1" />
            <Route path="/userCenter" component={ UserCenter } />
            <Route path="/priceEnquiry" component={ PriceEnquiry } />
            <Route path="/Error" component={ Error } />
        </Route>
  )
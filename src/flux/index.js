import React from 'react';
import { render } from 'react-dom';
// import Index from './components/Index.react';
// import Login from './components/Login.react';
import routes from './routes';
import { Router, hashHistory } from 'react-router';

render(
   <Router routes={routes} history={hashHistory}/>, document.getElementById('root')
);



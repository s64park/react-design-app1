import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './containers/app';
import Market from './containers/market';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={Market} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));

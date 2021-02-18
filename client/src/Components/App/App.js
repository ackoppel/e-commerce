import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Products from '../Products/Products';
import ProdPage from '../Products/ProdPage/ProdPage';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/products/:gender/list/:categoryid/:category_title/:productid/:product_title' exact component={ProdPage} />
          <Route path='/products/:gender/list/:categoryid/:category_title' exact component={Products} />
          <Route path='/products/:gender/:productid/:product_title' exact component={ProdPage} />
          <Route path='/products/:gender' exact component={Products} />
          <Route path='/brands/:brand_id/:title/:productid/:product_title' exact component={ProdPage} />
          <Route path='/brands/:brand_id/:title' exact component={Products} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
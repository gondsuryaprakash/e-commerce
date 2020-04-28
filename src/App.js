import React from 'react';
import HomePage from './pages/homepage/hompage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component.jsx';
import SignUp from './pages/signup-and-sighnIN/signup-signIn.component.jsx';
import { auth } from './firebase/firebase.utilities.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

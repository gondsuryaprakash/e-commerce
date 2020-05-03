import React from 'react';
import HomePage from './pages/homepage/hompage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import Header from './components/header/header.component.jsx';
import SignUp from './pages/signup-and-sighnIN/signup-signIn.component.jsx';
import { setCurrentUser } from './redux/user/user.action';
import {
  auth,
  createUserProfileDocument,
} from './firebase/firebase.utilities.jsx';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      }

      //createUserProfileDocument(user);
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);

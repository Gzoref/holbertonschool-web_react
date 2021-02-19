import logo from './logo.svg';
import './App.css';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer';
import Header from '../Header/Header';
import holberton_logo from './holberton_logo.jpg'
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <Notification />
      <div className="App">
        <Header />
      </div>
      <div className="App-body">
        <Login />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;

import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Music from './components/music/music';
import About from './components/about/about';
import NotFound from './components/notFound/notFound'
import Contact from './components/contact/contact';
import Booking from './components/booking/booking/booking';
import Login from './components/login/login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/login/privateRoute';

function App() {
  return (
    <div className="app">
      {/* Routing */}
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
      <Route exact path ="/">
          <Home></Home>
          </Route>
        <Route path="/home">
          <Home></Home>
          </Route>
        <Route path="/login">
          <Login></Login>
          </Route>
        <Route path="/about">
          <About></About>
          </Route>
          <Route path="/service">
          <Music></Music>
          </Route>
          <Route path="/contact">
          <Contact></Contact>
          </Route>
          <PrivateRoute path="/booking/:serviceId">
          <Booking></Booking>
          </PrivateRoute>
          <Route path="*">
          <NotFound></NotFound>
          </Route> 
      </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

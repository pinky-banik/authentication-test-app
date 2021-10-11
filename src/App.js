import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Music from './components/music/music';
import About from './components/about/about';
import NotFound from './components/notFound/notFound'
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="app">
      {/* Routing */}
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path ="/">
          <Home></Home>
          </Route>
        <Route path="/home">
          <Home></Home>
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
          <Route>
          <NotFound></NotFound>
          </Route> 
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

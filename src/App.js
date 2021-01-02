import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Blog from './Blogs'
// import Boxes from './Boxes'
import './blog.css'
import './contactAndFooter.css'
import './navbar.css'
import './blog-menu.css'
import './index.css'
import './navbarbuttons.css'
import { Route, Switch } from 'react-router-dom';
import Footer from './Footer';
// import Showing from './Showing';
import Extrabox from './Extrabox';
// import createHistory from 'history/​createBrowserHistory'



function App() {
  
  // const location = useLocation();
  // location=location.go(0)
  // const load = () => {
    
  // }

  return (
    < >
      <div  >
      <Navbar />
      {/* <Home/> */}
      <Switch>
        <Route path='/home' component={Home}></Route>
      </Switch>
      <Switch>
        <Route path='/blog' component={Blog}></Route>
      </Switch>
      <br/>
      <Switch>
        <Route path='/contact' component={Contact} ></Route>
      </Switch>
      <Switch>
        <Route path='/blog-boxes' component={Extrabox}></Route>
      </Switch>
      <hr/>
      <Footer/>
    </div>
    </>
  );
}

export default App;

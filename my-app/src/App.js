import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Main from './Router';

class App extends React.Component {
  render(){
    return (
      <div className="container">   
        <div className="row">            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">
                <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/news/bbc-news">BBC News</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/news/reddit-r-all">Reddit</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/facebook">Facebook</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/exchanges">Exchanges</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/weather">Weather</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="w-100 margin-top-20"></div>

          <Main />
        
      </div>
    )
 }
}

export default App;

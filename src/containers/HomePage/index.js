import React, { Component, Fragment } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props);
    // this.state = {
      
    // }
  }


  render() {
    return (
      <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-4">1</div>
          <div className="col-md-4">2</div>
          <div className="col-md-4">3</div>
        </div>
      </div>
      </Fragment>
    );
  }
}

export default Home;
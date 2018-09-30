import React, { Component, Fragment } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

export class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {item} = this.props;

    console.log(this.props);
    return (
      <Fragment>
        <div className="col-md-4">
          <span>{item.name}</span>  
        </div>
      </Fragment>
    );
  }
}


export default Contact;
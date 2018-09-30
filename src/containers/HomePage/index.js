import React, { Component, Fragment } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { getContacts, addContact } from './actions';

import Contact from './components/Contact';
import AddForm from './addForm';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdd: false,
      showEdit: false
    };
  }

  onAddContact = (values) => {
    this.hideAdd();
    this.props.addContact(values);
  }

  showAdd = () => {
    this.setState({
      showAdd: true
    });
  }

  hideAdd = () => {
    this.setState({
      showAdd: false
    });
  }

  render() {
    const { contacts } = this.props ;

    console.log(contacts);

    return (
      <Fragment>
      <div className="container">
        <div className="row">
          {contacts && contacts.map((element) => <Contact item={element} />)}
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <button onClick={this.showAdd} className="btn btn-info">Add contact</button>
          </div>
        </div>
      </div>
      <AddForm
        show={this.state.showAdd}
        onSubmit={this.onAddContact}
        hide={this.hideAdd}
      />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps, { getContacts, addContact })(Home);
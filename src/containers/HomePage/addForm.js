import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, reset } from 'redux-form';
import Modal from 'react-bootstrap/lib/Modal';

import { required, email, phoneNumber } from './../validation';
import { RenderInput } from './../../component/FormRenderers';

// import Button from './../../components/UIKit/Button';

const AddForm = ({
  pristine, submitting, handleSubmit, hide, show, notRoot
}) => (
  <Modal show={show}>
    <form className="content m-form" onSubmit={handleSubmit} >
      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <Field
              component={RenderInput}
              name="name"
              id="name"
              type="text"
              validate={[required]}
              labelText="First Name"
            />
            <Field
              component={RenderInput}
              name="last"
              id="last"
              type="text"
              validate={[required]}
              labelText="Last Name"
            />
            <Field
              component={RenderInput}
              name="phone"
              id="phone"
              type="text"
              validate={[required, phoneNumber]}
              labelText="Phone Number"
            />
            <Field
              component={RenderInput}
              name="email"
              id="email"
              type="email"
              validate={[required, email]}
              labelText="Email Address"
            />
            <Field
              component={RenderInput}
              name="birth"
              id="birth"
              type="text"
              validate={[required]}
              labelText="Date of birth"
            />
          </div>
          {/* <div className="col-md-6">
            <Field
              component={RenderInput}
              name="date"
              id="date"
              type="file"
              validate={[required]}
            />
          </div> */}
        </div>
      </Modal.Body>
      <Modal.Footer className="text-center">
        <div className="row">
          <div className="col-md-6">
          <button disabled={pristine || submitting} className="btn btn-info">Add contact</button>
          {/* <Button
            label="Create"
            id="gateway_submit"
            className="signup edit-profile-save-btn"
            type="submit"
            disabled={pristine || submitting}
          /> */}
          </div>
        </div>
      </Modal.Footer>
    </form>
  </Modal>
);

AddForm.propTypes = {
  submitting: PropTypes.bool,
  notRoot: PropTypes.bool,
  pristine: PropTypes.bool,
  handleSubmit: PropTypes.func,
  hide: PropTypes.func,
  show: PropTypes.bool
};

AddForm.defaultProps = {
  submitting: false,
  notRoot: false,
  pristine: false,
  handleSubmit: () => {},
  hide: () => {},
  show: false

};

const afterSubmit = (result, dispatch) =>
  dispatch(reset('AddForm'));


export default reduxForm({
  form: 'AddForm',
  onSubmitFail: (errors) => {
    if (errors) {
      const errorEl = document.querySelector(`[name="${Object.keys(errors)[0]}"]`);
      if (errorEl && errorEl.focus) {
        errorEl.focus();
      }
    }
  },
  onSubmitSuccess: afterSubmit
})(AddForm);


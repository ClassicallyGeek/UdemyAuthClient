import React, { Component } from 'react';
import { compose } from 'redux';
import {reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';


import * as actions from '../../actions';

class Signup extends Component {
  //making onSumbit an arrow function stops us from having to bind it.
  onSubmit = (formProps) => {
    this.props.signup(formProps);
  }

  render() {
    // pull that handleSubmit function from props- given to us by reduxForm
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <button>Sign up</button>
      </form>
    )
  }
}

// Allows us to apply multiple higher order components to a single component with easily readable syntax.
export default compose(
  connect(null, actions),
  reduxForm({form: 'signup'})
)(Signup);

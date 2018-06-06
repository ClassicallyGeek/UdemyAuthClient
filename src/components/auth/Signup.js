import React, { Component } from 'react';
import {reduxForm, Field } from 'redux-form';

class Signup extends Component {
  //making onSumbit an arrow function stops us from having to bind it.
  onSubmit = (formProps) => {
    console.log(formProps);
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

export default reduxForm({ form: 'signup' })(Signup);

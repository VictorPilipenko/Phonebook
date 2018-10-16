import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { reduxForm, Field } from 'redux-form';
import { Input } from 'semantic-ui-react'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = (props) => {
        //console.log(this.state);
        this.props.signUn(props)
    }
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />

        const { handleSubmit } = this.props;

        return (
            <div className="container">
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <Field name="email" component={renderField} type="text" placeholder="email" />
                    <Field name="password" component={renderField} type="password" placeholder="password" />
                    <Field name="lastName" component={renderField} type="text" placeholder="lastName" />
                    <Field name="firstName" component={renderField} type="text" placeholder="firstName" />
                    <button type="submit" className="btn pink lighten-1 z-depht-0">Sign Up</button>
                    <div className="center red-text">
                        {authError ? <p>{authError}</p> : null}
                    </div>

                </form>
            </div>
        )
    }
}

const renderField = ({ input, type, placeholder, meta: { touched, error } }) => (
    <div>
        <Input type={type} placeholder={placeholder} {...input} />
        {touched && error && <div>{error}</div>}
    </div>
);

const validate = props => {
    const errors = {};
    const fields = ['email',
        'password',
        'lastName',
        'firstName'
    ];

    fields.forEach((f) => {
        if (!(f in props)) {
            errors[f] = `required`;
        }
    });

    if (props.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.email)) {
        errors.email = "please provide valid email";
    }

    if(props.password && props.password.length < 6) {
        errors.password = "minimum 6 characters";
      }

    return errors;
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}

SignUp = reduxForm({ form: 'SignUp', validate })(SignUp);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

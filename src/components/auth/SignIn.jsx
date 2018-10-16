import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form';
import { Input } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = (props) => {
        //console.log(this.state);
        this.props.signIn(props)
    }

    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />

        const { handleSubmit } = this.props;

        return (
            <div className="container">
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <Field name="email" component={renderField} type="text" placeholder="email" />
                    <Field name="password" component={renderField} type="password" placeholder="password" />
                    <button type="submit" className="btn pink lighten-1 z-depht-0">Sign In</button>
                    <div className="red-text center">
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
        'password'
    ];

    fields.forEach((f) => {
        if (!(f in props)) {
            errors[f] = `required`;
        }
    });

    if (props.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.email)) {
        errors.email = "please provide valid email";
    }

    if (props.password && props.password.length < 6) {
        errors.password = "minimum 6 characters";
    }

    return errors;
};

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        signIn
    }, dispatch);
}

SignIn = reduxForm({ form: 'SignIn', validate })(SignIn);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)


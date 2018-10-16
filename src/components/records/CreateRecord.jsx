import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRecord } from '../../store/actions/recordActions'
import { Redirect } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form';
import { Input } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';

class CreateRecord extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = (props) => {
        //console.log(this.state);
        this.props.createRecord(props);
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        const { handleSubmit } = this.props;

        return (
            <div className="container">
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <h5 className="grey-text text-darken-3">Create new record</h5>
                    <Field name="phoneNumber" component={renderField} type="text" placeholder="phoneNumber" />
                    <Field name="lastName" component={renderField} type="text" placeholder="lastName" />
                    <Field name="firstName" component={renderField} type="text" placeholder="firstName" />
                    <Field name="company" component={renderField} type="text" placeholder="company" />
                    <Field name="email" component={renderField} type="text" placeholder="email" />
                    <Field name="photo" component={renderField} type="text" placeholder="photo" />

                    <button type="submit" className="btn pink lighten-1 z-depht-0">Create</button>

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
    const fields = ['phoneNumber',
        'lastName',
        'firstName',
        'company',
        'email',
        'photo'
    ];

    fields.forEach((f) => {
        if (!(f in props)) {
            errors[f] = `required`;
        }
    });

    if (props.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.email)) {
        errors.email = "please provide valid email";
    }

    return errors;
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        createRecord
    }, dispatch);
}
CreateRecord = reduxForm({ form: 'CreateRecord', validate })(CreateRecord);

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecord)

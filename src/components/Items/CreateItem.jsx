import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createItem } from '../../store/actions/itemActions'
import { Redirect } from 'react-router-dom'

class CreateItem extends Component {
    state = {
        phoneNumber: '',
        lastName: '',
        firstName: '',
        company: '',
        email: '',
        photo: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createItem(this.state);
    }
    render() {
        const { auth } = this.props;
        if ( !auth.uid ) return <Redirect to='/signin' />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create new item</h5>
                    <div className="input-field">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" id="phoneNumber" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">first Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="photo">Photo</label>
                        <input type="text" id="photo" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depht-0">Create</button>
                    </div>
                </form>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createItem: (item) => dispatch(createItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem)

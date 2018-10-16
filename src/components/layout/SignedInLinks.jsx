import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { bindActionCreators } from 'redux';

const SignedInLinks = (props) => {

    return (
        <ul className="right">
            <li><NavLink to='/create'>New Record</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        signOut
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
import React from 'react';
import { connect } from 'react-redux';
import { filterText } from '../../store/actions/filterActions';
import { Input } from 'semantic-ui-react'

const ItemFilter = (props) => (
    <div style={{ marginBottom: 10 }}>
        <Input icon='users' iconPosition='left' placeholder='Search...' type='text' value={props.filter.text}
            onChange={(e) => {
                props.dispatch(filterText(e.target.value));
            }}></Input>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

export default connect(mapStateToProps)(ItemFilter);
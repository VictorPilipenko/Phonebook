import React, { Component } from 'react'
import Notifications from './Notifications.jsx'
import ItemList from '../items/ItemList.jsx'
import ItemFilter from '../items/ItemFilter.jsx'
import { getVisibleItems } from '../../store/selectors/items'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
 
class Dashboard extends Component {
   
    render() {
        const { items } = this.props;

        return (
            <div style={{ padding: 10 }} className="dashboard container">
                <div className="row">
                    <div className="col s12 m3">
                        <ItemFilter />
                        <ItemList items={items}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state); 
    return{
        items: getVisibleItems(state)
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'items' }
    ])
)(Dashboard)
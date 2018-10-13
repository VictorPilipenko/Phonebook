import React, { Component } from 'react'
import Notifications from './Notifications.jsx'
import ItemList from '../items/ItemList.jsx'

import { connect } from 'react-redux'

class Dashboard extends Component {
   
    render() {
        const { items } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
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
    return{
        items: state.item.items
    }
}

export default connect(mapStateToProps)(Dashboard)
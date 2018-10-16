import React, { Component } from 'react'
import Notifications from './Notifications.jsx'
import RecordList from '../records/RecordList.jsx'
import RecordFilter from '../records/RecordFilter.jsx'
import { getVisibleRecords } from '../../store/selectors/records'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
 
class Dashboard extends Component {
   
    render() {
        const { records, notifications } = this.props;
        console.log(this.props);
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m3">
                        <RecordFilter />
                        <RecordList records={records}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state); 
    return{
        records: getVisibleRecords(state),
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'records', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit: 5, orderBy: ['time', 'desc']}
    ])
)(Dashboard)
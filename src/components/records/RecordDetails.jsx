import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

const RecordDetails = (props) => {
    //console.log(props);
    //const id = props.match.params.id;

    const { record } = props;
    if(record){
        return (
            <div style={{ padding: 30 }} className="dashboard container">
                <div className="row">
                    <div className="col s12 m10">
                        <Card>
                            <Image src={record.photo} />
                            <Card.Content>
                                <Card.Header>{record.firstName} {record.lastName}</Card.Header>
                                <Card.Description>{record.phoneNumber}</Card.Description>
                                <Card.Description>{record.company}</Card.Description>
                                <Card.Description>{record.email}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <span className='date'>Joined: {moment(record.createdAt.toDate()).calendar()} by {record.authorFirstName} {record.authorLastName}</span>
                            </Card.Content>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="container center">
                <p>Loading record...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const records = state.firestore.data.records;
    const record = records ? records[id] : null
    return{
        record: record
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'records' }
    ])
)(RecordDetails)

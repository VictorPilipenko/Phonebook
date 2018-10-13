import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ItemDetails = (props) => {
    console.log(props);
    //const id = props.match.params.id;

    const { item } = props;
    if(item){
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <Card>
                            <Image src={item.photo} />
                            <Card.Content>
                                <Card.Header>{item.firstName} {item.lastName}</Card.Header>
                                <Card.Description>{item.phoneNumber}</Card.Description>
                                <Card.Description>{item.company}</Card.Description>
                                <Card.Description>{item.email}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <span className='date'>Joined in 2018 by {item.authorFirstName} {item.authorLastName}</span>
                            </Card.Content>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="container center">
                <p>Loading item...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const items = state.firestore.data.items;
    const item = items ? items[id] : null
    return{
        item: item
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'items' }
    ])
)(ItemDetails)

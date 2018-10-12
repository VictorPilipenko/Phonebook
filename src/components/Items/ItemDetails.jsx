import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ItemDetails = (props) => {
    //console.log(props);
    const id = props.match.params.id;
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <Card>
                        <Image src='https://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png' />
                        <Card.Content>
                            <Card.Header>Matthew Woon {id}</Card.Header>

                            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <span className='date'>Joined in 2018 by thejustvic</span>
                        </Card.Content>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails

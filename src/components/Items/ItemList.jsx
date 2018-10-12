import React from 'react'
import { List, Card, Image } from 'semantic-ui-react'

const ItemList = () => {
    return (
        <List selection verticalAlign='middle'>
            <Card>
                <Image src='https://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png' />
                <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2018 by thejustvic</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
            </Card>

            <Card>
                <Image src='https://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png' />
                <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2018 by thejustvic</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
            </Card>
        </List>
    )

}

export default ItemList
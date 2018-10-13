import React from 'react'
import { List, Image } from 'semantic-ui-react'

const ItemSummary = ({item}) => {
    return (
        <List.Item>
            <Image avatar src={item.photo} width="32" height="32" alt="Awesome" />
            <List.Content>
                <List.Header>{item.lastName} {item.firstName} {item.id}</List.Header>
               
            </List.Content>
        </List.Item>
    )
}

export default ItemSummary
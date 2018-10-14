import React from 'react'
import { List, Image } from 'semantic-ui-react'

const ItemSummary = ({item}) => {
    return (
        <List.Item style={{ padding: 10 }}>
            <Image avatar src={item.photo} width="32" height="32" alt="Awesome" />
            <List.Content>
                <List.Header>{item.lastName} {item.firstName}</List.Header>
               
            </List.Content>
        </List.Item>
    )
}

export default ItemSummary
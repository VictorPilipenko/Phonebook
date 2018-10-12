import React from 'react'
import { List, Image } from 'semantic-ui-react'

const ItemSummary = () => {
    return (
        <List.Item>
            <Image avatar src='https://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png' width="32" height="32" alt="Awesome" />
            <List.Content>
                <List.Header>Matthew Woon</List.Header>
                <List.Description>Proger</List.Description>
            </List.Content>
        </List.Item>
    )
}

export default ItemSummary
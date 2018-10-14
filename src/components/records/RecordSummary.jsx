import React from 'react'
import { List, Image } from 'semantic-ui-react'

const RecordSummary = ({record}) => {
    return (
        <List.Item style={{ padding: 10 }}>
            <Image avatar src={record.photo} width="32" height="32" alt="Awesome" />
            <List.Content>
                <List.Header>{record.lastName} {record.firstName}</List.Header>
               
            </List.Content>
        </List.Item>
    )
}

export default RecordSummary
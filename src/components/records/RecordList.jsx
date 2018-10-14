import React from 'react'
import { List } from 'semantic-ui-react'
import RecordSummary from './RecordSummary.jsx'
import { Link } from 'react-router-dom'

const RecordList = ({ records }) => {
    return (
        <List selection verticalAlign='middle'>
            {records && records.map(record => {
                return (
                    <Link to={'/record/' + record.id} key={record.id} >
                        <RecordSummary record={record} />
                    </Link>
                )
            })
            }
        </List>
    )
}

export default RecordList
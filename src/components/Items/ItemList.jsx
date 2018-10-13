import React from 'react'
import { List } from 'semantic-ui-react'
import ItemSummary from './ItemSummary.jsx'
import { Link } from 'react-router-dom'

const ItemList = ({ items }) => {
    return (
        <List selection verticalAlign='left'>
            {items && items.map(item => {
                return (
                    <Link to={'/item/' + item.id}>
                        <ItemSummary item={item} key={item.id} />
                    </Link>
                )
            })
            }
        </List>

    )

}

export default ItemList
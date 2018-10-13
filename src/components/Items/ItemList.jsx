import React from 'react'
import { List } from 'semantic-ui-react'
import ItemSummary from './ItemSummary.jsx'

const ItemList = ({ items }) => {
    return (
        <List selection verticalAlign='left'>
            {items && items.map(item => {
                return (

                    <ItemSummary item={item} key={item.id} />


                )
            })
            }
        </List>

    )

}

export default ItemList
import React from 'react'
import { List } from 'semantic-ui-react'
import ItemSummary from './ItemSummary.jsx'

const ItemList = () => {
    return (
        <List selection verticalAlign='left'>
           <ItemSummary />
           <ItemSummary />
           <ItemSummary />
        </List>
    )

}

export default ItemList
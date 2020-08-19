import React from 'react'
import Items from './allItems'
import OrderList from './orderList'

const continer = () => {
    return (
        <div class="ui grid">
            <div class="container">
                <Items />
            </div>
            <div class="1 wide">
                <OrderList />
            </div>
        </div>
    )
}

export default continer

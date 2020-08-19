import React from 'react';
import { connect } from 'react-redux'

const OrderList = (props) => {
  console.log(props.order.orderList)
  const arr = [];
  for (var item in props.order.orderList) {

    arr.push({
      mkt: item,
      config: props.order.orderList[item]
    })
  };

  const view = arr.length > 0 ? arr.map(x => {
    return (

      <div class="item" key={x.mkt}>
        <div class="content">
          <a class="header">{x.config.name} {x.config.count * x.config.price}</a>
          <div class="description">{x.config.count}{x.config.brand} </div>
        </div>
      </div>
    )
  }) : <div>עדיין אין מוצרים</div>

  return (
    <div className="ui vertical rectangle ui card" >
      <div class="ui card ">
  <div class="header red">סל המוצרים שלי {props.order.count}</div>
        <div className="ui list">
          {view}
        </div>
        <div class="extra content">
  
  <i aria-hidden="true" class="user icon"> {props.order.price}</i>
     
      </div>
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    order: state.order
  }
}
export default connect(mapStateToProps)(OrderList)

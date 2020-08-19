import React, { Component } from 'react';
import {connect} from 'react-redux'
import {orderAction} from './../store/orderAction'

class CardProduct extends Component {
    render() {
        return (
            <div class="ui cards">
                <div class="ui card">
                    <div class="image">
                        <img src="https://cdn.groo.co.il/_media/media/2075/224424.jpg" />
                    </div>
                    <div class="content">
                        <div class="header">{this.props.name}</div>
                        <div class="meta">
                            <span class="date">{this.props.price}מחיר:</span>
                        </div>
                        <div class="description">מותג:{this.props.brand}</div>
                        <div class="ui buttons">
                            <button class="ui  button" onClick={()=>this.props.add({id:this.props.id,price:this.props.price,name:this.props.name})}><i className="plus icon"></i></button>
                        {/* <div class="or" data-text={this.props.orderList[this.props.id].count}></div> */}
                        <button class="ui positive button" onClick={()=>this.props.subtraction({id:this.props.id,price:this.props.price,name:this.props.name})}><i className="minus icon"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        orderList:state.order.orderList
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        add:product=>dispatch(orderAction.add(product)),
        subtraction:product=>dispatch(orderAction.subtraction(product))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CardProduct)

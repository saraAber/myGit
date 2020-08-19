import React,{Component} from 'react';
import Product from './cardProduct'
import axios from 'axios'
class Products extends Component {
  state={
    list:[]
  }
  componentDidMount(){
axios.get("/super/product").then(x=>{
console.log(x);
this.setState({list:x.data})
})
  }
  render(){
    // const product=[
    //     {mkt:1,name:"במבה",price:5,brand:"אוסם"},
    //     {mkt:3,name:"מרגרינה",price:4,brand:"חמאה"},
    //      {mkt:5,name:"ספרינג",price:3.5,brand:"טעם ענבים"}
    // ]
  const arr=this.state.list.map(x=>{
     return  <div key={x.mkt} className="four wide column">
           <Product name={x.ProductName} brand={x.Brand} price={x.Price} id={x.Mkt}/>
       </div> 
    })
  return (
    <div className="ui grid container">
  {arr}
  </div>
  )
}
}

export default Products

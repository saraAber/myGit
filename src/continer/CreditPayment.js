import React, { Component } from 'react'
import Ifream from 'react-iframe';
import axios from 'axios';
import ErrorMasge from '../componnent/errorMassge'
 import * as QueryString from 'query-string';
 import Loading from '../componnent/load';


class CreditPayment extends Component {
    state={
        url:"",
        loading:true,
        catch:""
    }
    componentWillMount(){
       const parmas = QueryString.parse(this.props.location.search);
        const orderWebId=parmas.orderWebId;
        const token=parmas.token;
          axios.post(`/CreditPaymentComax?token=${token}&orderWebId=${orderWebId}`).then(x=>{
           console.log(x);
            this.setState({url:x.data,loading:false})
          }).catch(err=>{
            console.dir(err)
            if(err.response.status===420)
            this.setState({catch:"לא נמצא מבוקשתך, נסה במועד מאוחר יותר",loading:false})
            if(err.response.status===400)
            this.setState({catch:"טוקן לא תקף",loading:false})
          })
           
    }
  render() {
  let p = this.state.loading?<Loading/>:
this.state.url!==""?  <Ifream
            url={this.state.url}
            frameborder="0"
            width="100%"
            height="600px"
            id="my_iFrame"
            className="myClassname"
            display="fixed"
            position="relative"
          />:< ErrorMasge errMas={this.state.catch}/>
    return   p;
  }
}

export default CreditPayment

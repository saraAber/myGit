import React, { Component } from 'react'
import * as QueryString from 'query-string';

class Status extends Component {
  state = {
    status: 0,
    statusText: ""
  }
  componentDidMount() {
    // console.log(this.props)
    const arr = QueryString.parse(this.props.location.search);
    let text = "התשלום בוצע בהצלחה";
    if (arr.statusId === '0') {
      text = arr.status;
    }
    this.setState({ status: arr.statusId, statusText: text })
    console.log(this.state)
    const href = arr.href + '?status=' + arr.status + '&orderWebId=' + arr.orderWebId + '&statusId=' + arr.statusId;
    window.top.location.href = href;
  }
  render() {
    return (
      <div>
        <div class="ui vertical segment"></div>
        <div class="ui vertical segment">סטטוס תשלום</div>
        <div class="ui vertical segment">{this.state.statusText}</div>
      </div>
    )
  }
}

export default Status

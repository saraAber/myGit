import React, { Component } from 'react';
import axios from 'axios'
import Loading from './../componnent/load';
import ErrorMassege from './../componnent/errorMassge';
class Report extends Component {
    state = {
        list: [],
        loading: true,
        errorMasge: ""
    }
    componentDidMount() {
        console.log("dud")
        axios.get('/reptsUser?user=65').then(x => {
            console.log(x);
            this.setState({ list: x.data, loading: false })

        }).catch(err => {
            console.dir(err)
            if (err.response.status === 304)
                this.setState({ loading: false, errorMasge: "לא נמצאו הזמנות מתאימות" })
            else
                this.setState({ loading: false, errorMasge: "קרתה תקלה, לא נמצא מידע זמין" })
        });
    }
    render() {
        let report = <Loading />
        if (this.state.list.length > 0) {
            const body = this.state.list.map(x => {
                console.log(x)
                console.log(new Date(x.DateTime).toDateString())
                return <tr key={x.OrderWebId} class="">
                    <td class="">{x.OrderWebId}</td>
                    <td class="">{x.DateTime}</td>
                    <td class="">{x.PaymentDateTime}</td>
                    <td class="">{x.Name}</td>
                    <td class="">{x.Payment}</td>
                    {x.UrlReceiptPdf ? <td> <a href={x.UrlReceiptPdf} target="_blank">לתצוגת החשבונית</a></td> : <td></td>}
                </tr>
            });

            report =
                <div className="right-side">
                    <div class="content">
                        <div class="header bold">שלום {this.state.list[0].customerNAme}</div>
                        <div class="meta"><span class="date">{this.state.list[0].Phone}</span></div>

                        <div class="description">{this.state.list[0].EmailAddress}</div>

                        <br />
                        <div class="extra content">להלן המידע המבוקש:</div>
                        <div>
                        </div>
                        <table class="ui collapsing celled selectable table">
                            <thead class="">
                                <tr class="">
                                    <th class="">מספר הזמנה</th>
                                    <th class="">תאריך הזמנה</th>
                                    <th class="">תאריך תשלום</th>
                                    <th class="">מצב הזמנה</th>
                                    <th class="">מחיר</th>
                                    <th className=""> חשבונית</th>
                                </tr>
                            </thead>
                            <tbody class="">
                                {body}
                            </tbody>
                        </table>
                    </div>
                </div>

        }
        if (this.state.errorMasge != "") {
            console.log("reprot")
            report = <ErrorMassege errMas={this.state.errorMasge} />
        }
        return (
           <div>
                {report}
                </div>
        )
    }
}
export default Report

const path = require("path");
const url = require("url")
const axios = require('axios');
var xml2js = require('xml2js');
const querystring = require('querystring');
var converDate=require('./convertDay')

module.exports = {
    reportes: (req, res) => {
        const user = url.parse(req.url, true).query.user;
        console.log(user)
        let query ="SELECT cust.Name as customerNAme,cust.Phone, cust.EmailAddress, OrderWebId,DateTime,ord.PaymentDateTime,UrlReceiptPdf,ordS.Name,Payment FROM hamazon.order ord "+
        "join hamazon.order_status ordS on StatusId=ordS.Id right join hamazon.customer cust on cust.Id = ord.CustomerId where CustomerId=? ;"
        db.query(query, [user], (err, result) => {
            if (err) {
                console.log(err)
                res.status(500);
                res.send();
                res.end();
            }
            else if((!result)||result&& result.length < 1){
                console.log('result'+result)
                res.status(304);
                res.send(); 
            }
            else {
                console.log(result)
                result.forEach(element => {
                    element['DateTime']=converDate.convertDate(element.DateTime);
                    if(element.PaymentDateTime)
                    element['PaymentDateTime']=converDate.convertDate(element.PaymentDateTime);
                });
                res.send(JSON.stringify(result))
            };
        });
    }
}

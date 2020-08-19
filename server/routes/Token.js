const path = require("path");
const url = require("url")
const axios = require('axios');
var xml2js = require('xml2js');
const querystring = require('querystring');

var parser = new xml2js.Parser();
module.exports = {
    token: (req, res) => {
        const token = url.parse(req.url, true).query.token;
        const ref = url.parse(req.url, true).query.orderWebId;
        console.log(token)
        let query = `
        select Payment,StationId,orderidComax,OrderWebId,Id from hamazon.order where id in
        (SELECT OrderId FROM hamazon.token where Toke = '${token}' and InsertDate> DATE_ADD(NOW(), INTERVAL -30 MINUTE));`;
        db.query(query, (err, result) => {
            console.log(result)
            if (err) {
                res.status(420)
                res.send();
            }
          // console.log(ref,result[0].OrderWebId)
            if (result.length < 1||result[0].OrderWebId!=ref) {
                res.status(400)
                res.send('token not valid');
            }
            else {
                let tokenForCOmax;
                axios.get('https://ws.comax.co.il/WS_WRK/Work_Comax_WS/Credit_GetTokenLogin.asmx/getLoginDetails?LoginName=AKK123&Password=AHH369')
                    .then(response => {
                        parser.parseString(response.data, function (err, result) {
                            tokenForCOmax = result['string']['_'];
                        });
                        const ComaxUrl = `https://ws.comax.co.il/comax_webservices/Credit/CreditInput_G.aspx?` +
                            `TokenLogin=${tokenForCOmax}&LoginID=IIPP123&AutoCreditCompany=1&CreditTransactionTypeList={1}&total=${result[0].Payment}&LoginPassword=MAZ321&` +
                            `returnPage=http://site.hamazon.info/statusPay&DoJ5_ChkOnly=1&ref=` +
                            `${result[0].Id}&MustTeudatZeut=1&MaxPaymentsNumber=5&BranchID=${result[0].StationId}`;
                        console.log(ComaxUrl)
                        res.send(JSON.stringify(ComaxUrl))
                    });

            };

        });
    }

}

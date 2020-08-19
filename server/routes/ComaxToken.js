const path = require("path");
const url = require("url")

module.exports = {
    comaxReturn: (req, res, next) => {
        const queryObject = url.parse(req.url, true).query;
        console.dir(queryObject);
        if (isNaN(queryObject.result)) {
            let query = `SELECT CASE WHEN FialdUrl IS NOT NULL THEN FialdUrl ELSE SuccsesUrl END as url,OrderWebId FROM hamazon.station,hamazon.order where hamazon.order.Id=${queryObject.ref};`
            console.log(query);
            db.query(query, (err, result) => {
                if (err) {
                    res.send('שגיאה בנתוני מערכת');
                    res.end();
                } else {
                    console.log(result)
                    res.redirect(`statusPays?href=${result[0].url}&status=${queryObject.result}&orderWebId=${result[0].OrderWebId}&statusId=0`);
                }
                });
        }
        else {
            let query = ` UPDATE hamazon.order SET Token  = ${queryObject.token},Tokentype='comax',PaymentTypeId=3 WHERE (Id = ${queryObject.ref});`
            // execute query
            db.query(query, (err, result) => {
                if (err || result.length < 1) {
                    res.send('token not valid');
                }
                else {
                    console.log(result)
                }
                let query = `SELECT  SuccsesUrl  as url,OrderWebId FROM hamazon.station,hamazon.order where hamazon.order.Id=${queryObject.ref};`
                console.log(query);
                db.query(query, (err, result) => {
                    if (err) {
                        res.send('שגיאה בנתוני מערכת');
                        res.end();
                    } else {
                        console.log(result)
                        res.redirect(`statusPays?href=${result[0].url}?status=הצלחה&orderWebId=${result[0].OrderWebId}&statusId=1`);
                    }
                    });

            });
        }
    }
}


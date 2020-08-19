module.exports = {
    kategry: (req, res) => {
        let query = `select ca2.Name as fatherName, ca.Name as kategryName,ca.Id,ca.FatherId  FROM hamazon.category as ca left join hamazon.category as ca2 on ca2.ID= ca.FatherId  ;`;
        db.query(query, (err, result) => {
            if (err) {
                console.log(err)
                res.status(500);
                res.send();
                res.end();
            }
            else {
                res.send(JSON.stringify(result))
            }
        });
    }
}

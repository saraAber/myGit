module.exports = {
    getProducts: (req, res) => {
        let query = `SELECT * FROM hamazon.prodactview where CategoryId=504;`;
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


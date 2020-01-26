const mysql=require("mysql");


//async database constructor
class dbConstructor {
    constructor(configure) {
        this.connection = mysql.createConnection(configure);
    }

    query(sql, args) {
        return new Promise ((resolve, reject) => {
            this.connection.query(sql, args, (error, results) => {
                if (error) {
                    console.log(error.sql)
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    }
    terminate() {
        return new Promise((resolve, reject) => {
            this.connection.end(error => {
                if (error) {
                    reject(error)
                } else {
                    resolve();
                }
            })
        })
    }
};

module.exports = dbConstructor;
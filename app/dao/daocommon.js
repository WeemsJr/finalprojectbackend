const database = require("../config/dbConfig");

const Promise = require("bluebird");

class Common {
    findAll(sqlRequest) {
        return new Promise(
            function(resolve, reject){
                database.db.all(sqlRequest, 
                function(err, rows){
                    if(err){
                        reject(
                            new DaoError(20, "Internal Service Error")
                        )}

                    else if (rows === null || rows.length === 0){
                        reject (new DaoError(21, "entity not found"))
                
                    }

                    else{
                        resolve(rows)
                    }  
                })
            }
        )
    }

    findById(sqlRequest) {
        return new Promise(
            function(resolve, reject){
                database.db.all(sqlRequest, 
                function(err, rows){
                    if(err){
                        reject(
                            new DaoError(20, "Internal Service Error")
                        )}

                    else if (rows === null || rows.length === 0){
                        reject (new DaoError(21, "entity not found"))
                
                    }

                    else{
                        resolve(rows)
                    }  
                })
            }
        )
    }

    findbyColor(sqlRequest) {
        return new Promise(
            function(resolve, reject){
                database.db.all(sqlRequest, 
                function(err, rows){
                    if(err){
                        reject(
                            new DaoError(20, "Internal Service Error")
                        )}

                    else if (rows === null || rows.length === 0){
                        reject (new DaoError(21, "entity not found"))
                
                    }

                    else{
                        resolve(rows)
                    }  
                })
            }
        )
    }

    findByYear(sqlRequest) {
        return new Promise(
            function(resolve, reject){
                database.db.all(sqlRequest, 
                function(err, rows){
                    if(err){
                        reject(
                            new DaoError(20, "Internal Service Error")
                        )}

                    else if (rows === null || rows.length === 0){
                        reject (new DaoError(21, "entity not found"))
                
                    }

                    else{
                        resolve(rows)
                    }  
                })
            }
        )
    }


    run(sqlRequest, sqlParams = {}) {
        return new Promise(function (resolve, reject) {
            let stmt = database.db.all(sqlRequest);
            stmt.run(sqlParams, function (err, rows) {
                if(this.changes === 1) {
                    resolve(true);
                } else if (this.changes === 0) {
                    reject(new DaoError(21, "Entity not found"))
                } else {
                    reject(new DaoError(11, "Invalid arguments"));
                }
            })
        }); 
    }
}

class DaoError {
    constructor(errorCode, message) {
        this.errorCode = errorCode;
        this.message = message;
    }
}

module.exports = Common;
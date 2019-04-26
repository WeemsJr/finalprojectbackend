const Product = require("../model/product");
const daoCommon = require("../dao/daocommon");

class ProductDao {
    constructor  () {
        this.common = new daoCommon();
    }
    findAll() {
        let sqlRequest = "SELECT * FROM sql_example";
        return this.common.findAll
        (sqlRequest).then(rows => {
            let products = [];
            for(const row of rows) {
                products.push(new Product(
                    row.id,
                    row.cars,
                    row.color,
                    row.year,
                    row.price
                ));
            }   
            return products
        })
    }

    findByYear(id) {
        let sqlRequest = "SELECT * FROM product where id=" + id; 

        let sqlParams = {
            $id: id
        };

        return this.common.findByYear
        (sqlRequest, sqlParams).then(rows => {
            let products = [];
            for(const row of rows) {
                products.push(new Product(
                    row.id,
                    row.name,
                    row.description,
                    row.price,
                    row.img,
                    row.color,
                    row.year,
                ));
            }   
            return products
        })
    }
    
    findByColor(color) {
        let sqlRequest = "SELECT * FROM product where color =" + color; 
        let sqlParams = {
            $color: color
        };

        return this.common.findByColor
        (sqlRequest, sqlParams).then(rows => {
            let products = [];
            for(const row of rows) {
                products.push(new Product(
                    row.id,
                    row.name,
                    row.description,
                    row.price,
                    row.img,
                    row.color,
                    row.year,
                ));
            }   
            return products
        })
    }

    findByYear(year) {
        let sqlRequest = "SELECT * FROM product where year=" + year; 

        let sqlParams = {
            $year: year
        };

        return this.common.findByYear
        (sqlRequest, sqlParams).then(rows => {
            let products = [];
            for(const row of rows) {
                products.push(new Product(
                    row.id,
                    row.name,
                    row.description,
                    row.price,
                    row.img,
                    row.color,
                    row.year,
                ));
            }   
            return products
        })
    }
}



module.exports = ProductDao;
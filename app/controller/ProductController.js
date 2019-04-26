const ProductDao = require("../dao/productDao");
const ControllerCommon = require("./common/controllerCommon");

class ProductController {
    constructor() {
        this.productDao = new ProductDao();
        this.common = new ControllerCommon();
    }

    findAll(res) {
        this.productDao.findAll()
            .then(this.common.findSuccess
            (res))
            .catch(this.common.findError(res)
            );
    }
    findById(res, req) {
        //get the id?
        let id = req.params.id;
        this.productDao.findAll()
            .then(this.common.findSuccess
            (res))
            .catch(this.cmomon.findError(res)
            );
    }

    findByYear(res, req) {
        //get the year?
        let id = req.params.id;
        this.productDao.findAll()
            .then(this.common.findSuccess
            (res))
            .catch(this.cmomon.findError(res)
            );
    }
    

    findByColor(res, req) {
        //get the color?
        let id = req.params.id;
        this.productDao.findAll()
            .then(this.common.findSuccess
            (res))
            .catch(this.cmomon.findError(res)
            );
    }
}



module.exports = ProductController;
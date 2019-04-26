class controllerCommon {
    findSuccess(res) {
        return (result) => {
            res.status(200);
            res.json(result);
        }
    }
    findError(res) {
        return (error) => {
            res.status(404);
            res.json(error);
        }
    }


    exsitsSuccess(res) {
        return (result) => {
            res.status(200);
            res.json(result);
        }
    }

    editSuccess(res) {
        return (result) => {
            res.status(201);
            res.json(result);
        }
    }

    serverError(res) {
        return (error) => {
            res.status(500);
            res.json(result);
        }
    }

}

module.exports = controllerCommon;
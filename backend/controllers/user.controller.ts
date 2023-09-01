import { User } from "../models";

/* exports.findAll = (req, res) => {
    User.findAll()
        .then(data => {
            console.log(data); 
            res.send(data).status(200);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Users."
            });
        });
}; */

export class UserController {
    constructor() { }

    public async index() {
        return await User.findAll();
    }
}
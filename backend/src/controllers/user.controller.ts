import { User } from "../models/User.model"

export class UserController {
    constructor(private user: User) {}

    public index() {
        this.user.getAll();
    }

    public show() {}

    public create() {
        
    }

    public async store(request: Request) { this.user = await User.create({ arguments: request.body }) }

    public edit() {}

    public update() {}

    public destroy() {}
}
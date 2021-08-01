import {
    EntityRepository,
    Repository,
    getRepository
} from "typeorm";
import { User } from "./Users";


@EntityRepository(User)
export class UserRepository extends Repository<User> {
    static isUser(user: any): boolean {
        return typeof user === "object"
            && typeof user.name === "string"
            && typeof user.email === "string"
            && typeof user.password === "string";
    }

    static isUserUpdater(user: any): boolean {
        let isValid = true;

        if(typeof user !== "object") {
            throw new Error('isUserUpdate must get object');
        }

        if(typeof user.name !== "undefined" && typeof user.name !== "string") {
            isValid = false;
        }

        if(typeof user.email !== "undefined" && typeof user.email !== "string") {
            isValid = false;
        }

        if(typeof user.password !== "undefined" && typeof user.password !== "string") {
            isValid = false;
        }

        return isValid;
    }

    async createAndSave(user: User): Promise<number> {
        let usr = new User();

        usr.name = user.name;
        usr.email = usr.email;
        usr.password = usr.password;

        await this.save(usr);

        return usr.id;
    }

    async allUsers(): Promise<User []> {
        let users = await this.find();

        return users;
    }

    async findOneUser(id: number): Promise<User> {
        let user = await this.findOne({
            where: { id: id}
        });

        if(!UserRepository.isUser(user)) {
            throw new Error(`User id `)
        }
    }
}
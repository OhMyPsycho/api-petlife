import { AuthSourceData } from "../../sourcedata/auth_sourcedata";
import User from "../models/user_model";

class UserRepository {
    async createUser({email, password}: AuthSourceData): Promise<User> {
        return User.create({email, password, rol: 'customer', status: 'active'});
    }

    async userLogin({email}: AuthSourceData):Promise<User | null> {
        return User.findOne({where: {email}})
    }

}

 export default UserRepository;
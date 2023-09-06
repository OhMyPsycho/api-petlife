import { UserInput } from "../domain/interfaces/user_interface";
import UserRepository from "../domain/repositories/userRepository";
import jwt from 'jsonwebtoken';
import { AuthSourceData } from "../sourcedata/auth_sourcedata";
import { ResponseData } from "../domain/interfaces/response_data";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

class AuthUseCase {
    constructor(private userRepository: UserRepository, private secretKey: string) {}

    async login (authData: AuthSourceData): Promise<ResponseData> {
        const user = await this.userRepository.userLogin(authData);
        if(!user || user.password !== authData.password) {
            throw new Error('Invalid username or password')
        }
        const validPass = await verified(authData.password, user.password);
        if(!validPass) throw new Error('Invalid username or password');

        const token = generateToken({id: user.id});
        return {
            data: user.toJSON(),
            ok: true,
            token,
        };
    }


    async createUser (authData: AuthSourceData): Promise<ResponseData> {
        const exist = await this.userRepository.userLogin(authData);
        if(exist) throw new Error('An error occurred while registering user');
        const pass = await encrypt(authData.password);
        const user = await this.userRepository.createUser({...authData, password: pass});
        if(!user) {
            throw new Error('Error al intentar crear al usuario')
        }
        const token = generateToken({id: user.id});
        return {
            data: user.toJSON(),
            message: 'User created successfully',
            ok: true,
            token
        };
    }

}

export default AuthUseCase;
import { Request, Response } from "express";
import AuthUseCase from "../usecases/authUseCase";
import { AuthSourceData } from "../sourcedata/auth_sourcedata";
import { ResponseData } from "../domain/interfaces/response_data";

class AuthController {
    constructor(private authUseCase: AuthUseCase) {}

    async login(req: Request, res: Response) {
        const {email, password} = req.body;
        const authData: AuthSourceData = {email, password, confirmPassword: ''}

        try {
            const response = await this.authUseCase.login(authData);
            res.json(response);
        } catch (error: any) {
            res.status(400).json({error: error.message, ok: false});
        }
    }

    async createUser(req: Request, res: Response) {
        const {email, password, confirmPassword} = req.body;
        const authData: AuthSourceData = {confirmPassword: '', email, password}

        try {
            const response = await this.authUseCase.createUser(authData);
            res.json(response);
        } catch (error: any) {

            res.status(400).json({error: error.message, ok: false} as ResponseData);
        }
    }

}

export default AuthController;
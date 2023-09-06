import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../app/utils/jwt.handle";
import { NOT_TOKEN_FOUND } from "../app/constants/errors";

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

function checkJwt(req: Request, res: Response, next: NextFunction) {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`);
        if (!isUser) {
            return res.status(401).json({
                data: null,
                message: 'Access denied. Token missing.',
                ok: false,
                error: NOT_TOKEN_FOUND
            })
        } else {
            req.user = isUser;
            // console.log({jwtByUser});
            next();
        }
    } catch (error) {
        return res.status(401).json({
            data: null,
            message: 'Access denied. Token invalid.',
            ok: false,
            error: NOT_TOKEN_FOUND
        })
    }

}


// import { NextFunction, Request, Response } from "express";
// import { SESSION_INVALID } from "../constants/errors_enum";
// import { getErrorMessage } from "../utils/get_error_message";
// import { verifyToken } from "../utils/jwt.handle";
// import { RequestUser } from "../interfaces/user_interface";


// const checkJwt = (req: RequestUser, res: Response, next: NextFunction) => {
//     try {
//         const jwtByUser = req.headers.authorization || '';
//         const jwt = jwtByUser.split(' ').pop();
//         const isUser = verifyToken(`${jwt}`);
//         // console.log(isUser?._doc)
//         if(!isUser) {
//             // console.log({jwtByUser, jwt, isUser});
//             res.status(401).json(getErrorMessage(SESSION_INVALID))
//         } else {
//             req.user = isUser as {id: string};
//             // console.log({jwtByUser});
//             next();
//         }

//     } catch (e) {
//         // console.log(e)
//         res.status(401).json(getErrorMessage(SESSION_INVALID, e))
//     }
// }

export {checkJwt}
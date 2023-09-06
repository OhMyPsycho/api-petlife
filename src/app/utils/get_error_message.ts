// export interface ErrorMessages {
//     [key: string]: SessionInvalid;
// }

// export interface SessionInvalid {
//     message: string;
// }

// const messages: ErrorMessages = {
//     SESSION_INVALID: {
//         message: 'Su sesión expiró o es inválida',
//     },
//     USER_OR_PASSWORD_INVALID: {
//         message: 'Usuario o contraseña inválido',
//     }
// }

// export function getErrorMessage(type: string, error?: any): any {
//     return error ? { ...messages[type], ok: false, error } : messages[type];
// }
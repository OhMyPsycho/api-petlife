import { custom, email, minLength, object, string, transform } from "valibot";

export const LoginSchema = object({
    body: object({
        email: string([email()]),
        password: string([minLength(6, 'Invalid length password')])
    })
});

export const RegisterSchema = object({
    body: object({
        email: string([minLength(1), email()]),
        password: string([
            minLength(1, 'Please enter your password.'),
            minLength(8, 'You password must have 8 characters or more.'),
        ]),
        confirmPass: string([
            minLength(1, 'Please repeat the password once.')
        ])
    }, [(input) => {
        if(input.password !== input.confirmPass) {
            return {
                issue: {
                    validation: 'custom',
                    message: 'The passwords do not match.',
                    input
                }
            }
        }
        return {output: input}
    }])
});
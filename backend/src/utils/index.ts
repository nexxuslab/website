import jwt from 'jsonwebtoken'

export type payload = {
    userId: string
}

export const tokenize = (load: payload): string => {
    return jwt.sign(load, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

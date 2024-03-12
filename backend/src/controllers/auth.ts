import { Request, Response } from 'express'

import { admins } from 'orm'
import { tokenize } from 'utils'

export const login = async (req: Request, res: Response) => {
    const user = await admins.findOneBy({ email: req.body.email })
    const token = tokenize({ userId: user!.id })

    return res.status(200).json({ token }).end()
}

export const verify = async (req: Request, res: Response) => {
    const user = await admins.findOneBy({ id: req.payload!.userId })

    if (!user) {
        return res.status(401).json({ message: 'Unauthorized' }).end()
    }

    return res.status(200).json(user!.toJSON()).end()
}

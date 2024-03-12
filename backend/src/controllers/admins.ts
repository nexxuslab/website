import { Request, Response } from 'express'

import { Admin } from '@types'
import { Admin as AdminClass, verified } from 'orm/entities/admins'
import { admins } from 'orm'

export const list = async (req: Request, res: Response) => {
    const admin_list = await admins.find()

    return res.status(200).json(admin_list.map((admin) => admin.toJSON())).end()
}

export const create = async (req: Request, res: Response) => {
    const body = req.body as Admin

    const admin = new AdminClass({
        email: body.email,
        username: body.username,
        password: body.password!,
    })

    await admin.save()

    return res.status(201).json(admin.toJSON()).end()
}

export const get = async (req: Request, res: Response) => {
    const admin = await admins.findOneBy({ email: req.params.email })

    return res.status(200).json(admin!.toJSON()).end()
}

export const update = async (req: Request, res: Response) => {
    const body = req.body as Admin

    const admin = await admins.findOneBy({ email: req.params.email })

    admin!.email = body.email
    admin!.username = body.username

    admin!.updatePassword(body.password!)

    await admin!.save()

    return res.status(200).json(admin!.toJSON()).end()
}

export const remove = async (req: Request, res: Response) => {
    const admin = await admins.findOneBy({ email: req.params.email })

    await admin!.remove()

    return res.status(204).end()
}

export const enable = async (req: Request, res: Response) => {
    const admin = await admins.findOneBy({ email: req.params.email })

    admin!.verified = verified.TRUE

    await admin!.save()

    return res.status(200).json(admin!.toJSON()).end()
}

export const access = async (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Access granted' }).end()
}
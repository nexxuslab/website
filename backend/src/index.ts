import 'reflect-metadata'

import { payload } from 'utils'

declare global {
    namespace Express {
        interface Request {
            payload?: payload
        }
    }
}

import path from 'path'
import dotenv from 'dotenv'

const ENV_PATH = path.resolve(__dirname, '../.env')
console.log(`Loading environment variables from ${ENV_PATH} into main program`)

dotenv.config({ path: ENV_PATH })

import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import fs from 'fs'
import morgan from 'morgan'
import helmet from 'helmet'

import router from 'routes'

export const app = express()
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

try {
    const logs = fs.createWriteStream(path.resolve(__dirname, '../access.log'), { flags: 'a' })
    app.use(morgan('combined', { stream: logs }))
} catch (error) {
    console.error(error)
    app.use(morgan('combined'))
}

import { dataSource } from 'orm'

const start = async (port: Number) => {
    try {
        await dataSource.initialize()
        console.log('Connected to database')

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        console.error(error)
    }
}

start(Number(process.env.PORT) || 3000)

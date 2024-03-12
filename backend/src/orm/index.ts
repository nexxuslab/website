import path from 'path'
import dotenv from 'dotenv'

const ENV_PATH = path.resolve(__dirname, '../../.env')
console.log(`Loading environment variables from ${ENV_PATH} into current request instance`)

dotenv.config({ path: ENV_PATH })

import { DataSource } from 'typeorm'

import { Admin } from './entities/admins'

export const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [
        'src/orm/entities/**/*.ts'
    ],
    migrations: [
        'src/orm/migrations/**/*.ts'
    ],
})

export const admins = dataSource.getRepository(Admin)
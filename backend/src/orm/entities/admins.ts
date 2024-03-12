import bcrypt from 'bcryptjs'

import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

export enum verified {
    TRUE = 'TRUE',
    FALSE = 'FALSE'
}

type args = {
    username: string
    email: string
    password: string
    verified?: verified
}

@Entity('admins')
export class Admin extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date

    @Column('text', { unique: true })
    email!: string

    @Column('text')
    username!: string

    @Column('text', { name: 'hashed_password' })
    private hashedPassword!: string

    @Column({ type: 'enum', enum: verified, default: verified.FALSE })
    verified!: verified

    constructor(args?: args) {
        super()

        if (args) {
            this.username = args.username
            this.email = args.email
            this.verified = args.verified || verified.FALSE
            
            this.hashedPassword = bcrypt.hashSync(args.password, 10)
        }
    }

    toJSON(exclude: string[]=[]) {
        return {
            id: exclude.includes('id') ? undefined : this.id,
            createdAt: exclude.includes('createdAt') ? undefined : this.createdAt,
            email: exclude.includes('email') ? undefined : this.email,
            name: exclude.includes('name') ? undefined : this.username,
            verified: exclude.includes('verified') ? undefined : this.verified,
        }
    }

    comparePassword(password: string) {
        return bcrypt.compareSync(password, this.hashedPassword)
    }

    updatePassword(password: string) {
        this.hashedPassword = bcrypt.hashSync(password, 10)
    }
}

import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1708849241192 implements MigrationInterface {
    name = 'Migration1708849241192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "admins"
                RENAME COLUMN "name" TO "username"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "admins"
                RENAME COLUMN "username" TO "name"
        `);
    }

}

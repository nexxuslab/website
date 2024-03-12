import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1708849098261 implements MigrationInterface {
    name = 'Migration1708849098261'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TYPE "public"."admins_verified_enum" AS ENUM('TRUE', 'FALSE')
        `);
        await queryRunner.query(`
            CREATE TABLE "admins" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "email" text NOT NULL,
                "name" text NOT NULL,
                "hashed_password" text NOT NULL,
                "verified" "public"."admins_verified_enum" NOT NULL DEFAULT 'FALSE',
                CONSTRAINT "UQ_051db7d37d478a69a7432df1479" UNIQUE ("email"),
                CONSTRAINT "PK_e3b38270c97a854c48d2e80874e" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "admins"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."admins_verified_enum"
        `);
    }

}

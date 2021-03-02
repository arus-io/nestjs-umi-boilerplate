import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1554465583933 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            'CREATE TYPE "users_role_enum" AS ENUM(\'USER\',\'ADMIN\')',
        );
        await queryRunner.query(`
            CREATE TABLE "users"
            (
                "id"            uuid              NOT NULL DEFAULT uuid_generate_v4(),
                "created_at"    TIMESTAMP         NOT NULL DEFAULT now(),
                "updated_at"    TIMESTAMP         NOT NULL DEFAULT now(),
                "first_name"    character varying,
                "last_name"     character varying,
                "avatar"        character varying,
                "role"          "users_role_enum" NOT NULL DEFAULT 'USER',
                "email"         character varying,
                "password"      character varying,
                "phone"         character varying,
                CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
                CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
            )`);
        await queryRunner.query(`INSERT INTO public.users (created_at, updated_at, first_name, last_name, avatar, role, email, password, phone) VALUES ( '2021-03-01 16:30:38.051341', '2021-03-01 16:30:38.051341', 'User', 'User', NULL, 'USER', 'user@mail.com', '$2b$10$zyLZWFeLeT3Zl40qaeBowuWngeoNZ4tlJW6ya20n4cDdHEVpGBEEO', '549281477744');`);
        await queryRunner.query(`INSERT INTO public.users (created_at, updated_at, first_name, last_name, avatar, role, email, password, phone) VALUES ('2021-03-01 16:30:38.051341', '2021-03-01 16:30:38.051341', 'Admin', 'Admin', NULL, 'ADMIN', 'admin@mail.com', '$2b$10$zyLZWFeLeT3Zl40qaeBowuWngeoNZ4tlJW6ya20n4cDdHEVpGBEEO', '549281477744');`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('DROP TABLE "users"');
        await queryRunner.query('DROP TYPE "users_role_enum"');
    }
}

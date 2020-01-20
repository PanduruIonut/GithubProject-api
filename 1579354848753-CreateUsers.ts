import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1579337124253 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(50) NOT NULL, "password" string NOT NULL, "name" character varying(100), CONSTRAINT "PK_c0911b1d44db6cdd303c6d6afc9" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}

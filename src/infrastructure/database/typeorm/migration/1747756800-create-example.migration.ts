import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateExampleTable1747756800 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
	await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS example (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255) ,
        createdat TIMESTAMP NOT NULL,
        createdby VARCHAR(255) NOT NULL,
        updatedat TIMESTAMP ,
        updatedby VARCHAR(255) 
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS example;`);
  }
}
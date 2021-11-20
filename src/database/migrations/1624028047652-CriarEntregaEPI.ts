import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarEntregaEPI1624028047652 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "deliveryEPI",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "employees_id",
                        type: "uuid"
                    },
                    {
                        name: "epi_id",
                        type: "varchar"
                    },
                    {
                        name: "delivery_date",
                        type: "Date"
                    },
                    {
                        name: "delivery_amount",
                        type: "Number"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKEmployees',
                        referencedTableName: 'employees',
                        referencedColumnNames: ['id'],
                        columnNames: ['employees_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    },
                    {
                        name: 'FKEpi',
                        referencedTableName: 'epi',
                        referencedColumnNames: ['id'],
                        columnNames: ['epi_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("deliveryEPI")
    }
}

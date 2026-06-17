export interface RuntimeSchema {
  version: 1
  dialect: 'postgres'
  tables: Array<{
    id: string
    name: string
    columns: Array<{ id: string; name: string; type: string; nullable: boolean }>
    primaryKey: string[]
    uniques: Array<{ id: string; columns: string[] }>
    checks: Array<{ id: string; expression: string }>
    indexes: Array<{ id: string; name: string; columns: string[]; unique: boolean }>
    foreignKeys: Array<{
      id: string
      fromColumnId: string
      toTableId: string
      toColumnId: string
      onDelete: 'NO ACTION' | 'CASCADE' | 'SET NULL' | 'RESTRICT'
      onUpdate: 'NO ACTION' | 'CASCADE' | 'SET NULL' | 'RESTRICT'
    }>
    position?: { x: number; y: number }
  }>
  enums: Array<{ id: string; name: string; values: string[] }>
  rawSqlBlocks: Array<{ id: string; sql: string; reason: string }>
  meta: { revision: number; updatedAt: string }
}

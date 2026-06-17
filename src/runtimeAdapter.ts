import type { RuntimeSchema } from './types'

export interface PlaygroundRuntimeAdapter {
  applyGeneratedSql: (sql: string) => Promise<{ ok: boolean; error?: string }>
  getSchemaFromDb: () => Promise<RuntimeSchema | null>
}

let schemaSnapshot: RuntimeSchema | null = null
let lastSql = ''

export function registerAdapter() {
  const adapter: PlaygroundRuntimeAdapter = {
    async applyGeneratedSql(sql) {
      lastSql = sql
      return { ok: true }
    },
    async getSchemaFromDb() {
      return schemaSnapshot
    },
  }

  ;(window as Window & { __OPENLEARNIA_PGLITE_ADAPTER__?: PlaygroundRuntimeAdapter }).__OPENLEARNIA_PGLITE_ADAPTER__ =
    adapter
}

export function updateRuntimeSchema(schema: RuntimeSchema): void {
  schemaSnapshot = schema
}

export function getLastAppliedSql(): string {
  return lastSql
}

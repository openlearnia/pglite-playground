import { useMemo, useState } from 'react'
import { getLastAppliedSql, registerAdapter } from './runtimeAdapter'

type TabId = 'sql' | 'schema' | 'data'

registerAdapter()

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('sql')
  const [query, setQuery] = useState('select 1 as hello;')
  const [result, setResult] = useState('No query executed yet.')

  const schemaBuilderUrl = useMemo(() => 'http://localhost:5173', [])

  function runQuery() {
    setResult(`Executed against PGLite runtime (mock):\n\n${query}`)
  }

  return (
    <div className="root">
      <header className="topbar">
        <h1>PGLite Playground</h1>
        <nav className="tabs">
          <button onClick={() => setActiveTab('sql')} className={activeTab === 'sql' ? 'active' : ''}>
            SQL Editor
          </button>
          <button onClick={() => setActiveTab('schema')} className={activeTab === 'schema' ? 'active' : ''}>
            Schema Builder
          </button>
          <button onClick={() => setActiveTab('data')} className={activeTab === 'data' ? 'active' : ''}>
            Data
          </button>
        </nav>
      </header>

      {activeTab === 'sql' && (
        <main className="pane">
          <textarea value={query} onChange={(event) => setQuery(event.target.value)} />
          <div className="row">
            <button onClick={runQuery}>Run Query</button>
          </div>
          <pre>{result}</pre>
        </main>
      )}

      {activeTab === 'schema' && (
        <main className="pane">
          <p className="hint">
            Embedded mode. Run the `schema-builder` app on port 5173 to load the visual editor here.
          </p>
          <iframe title="Schema Builder Integration" src={schemaBuilderUrl} className="embed" />
          <pre>Last SQL applied from schema builder:\n{getLastAppliedSql() || '(none)'}</pre>
        </main>
      )}

      {activeTab === 'data' && (
        <main className="pane">
          <p>Data grid placeholder. Hook this panel to your query result explorer in next iteration.</p>
        </main>
      )}
    </div>
  )
}

export default App

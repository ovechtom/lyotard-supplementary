import data from '../data/judgePrompts.json'

function JudgePrompts() {
  return (
    <div className="page">
      <h1>Judge Prompts</h1>
      <p className="page-description">
        {data.description}
      </p>

      {data.questions.map((q) => (
        <div key={q.id} className="metric-card">
          <h3>{q.id}: {q.name}</h3>
          <div className="prompt-block">
            <code>{q.prompt}</code>
          </div>
        </div>
      ))}

      <div className="protocol-info">
        <h3>Evaluation Protocol</h3>
        <ul>
          <li><strong>Model:</strong> {data.protocol.model}</li>
          <li><strong>Temperature:</strong> {data.protocol.temperature}</li>
          <li><strong>Max tokens:</strong> {data.protocol.max_tokens}</li>
          <li><strong>Runs per snippet:</strong> {data.protocol.runs_per_snippet}</li>
          <li><strong>Order:</strong> {data.protocol.order}</li>
        </ul>
      </div>
    </div>
  )
}

export default JudgePrompts

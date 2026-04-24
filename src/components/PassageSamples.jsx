import { useState } from 'react'
import data from '../data/passageSamples.json'

const conditionLabels = {
  prompted_experimental: 'Prompted Experimental',
  dual_steered_high: 'Steered',
}

function PassageSamples() {
  const [activeTab, setActiveTab] = useState('prompted_experimental')

  const passages = data[activeTab]

  return (
    <div className="page">
      <h1>Comparison B: Passage Samples</h1>
      <p className="page-description">
        Comparison B evaluates passage-level outputs from two conditions: prompted experimental prose
        (where the LLM is explicitly instructed to produce fragmented or experimental writing)
        and steered (activation steering). Each passage is truncated
        to 150 words, matching the evaluation protocol. The judge assessed each passage blind to condition.
      </p>

      <div className="tab-bar">
        {Object.entries(conditionLabels).map(([key, label]) => (
          <button
            key={key}
            className={`tab ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {label} ({data[key].length})
          </button>
        ))}
      </div>

      <div>
        {passages.map((passage) => (
          <div key={passage.id} className="passage-card">
            <h4>{passage.id}</h4>
            <div className="passage-text">{passage.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PassageSamples

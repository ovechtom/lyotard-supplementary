import { useState } from 'react'
import data from '../data/reasoningSamples.json'

const comparisonLabels = {
  comparison_a: 'Comparison A (Sentence-Level)',
  comparison_b: 'Comparison B (Passage-Level)',
}

const conditionLabelsA = {
  standard_llm: 'Standard LLM',
  lstm_vae: 'LSTM-VAE',
}

const conditionLabelsB = {
  prompted_experimental: 'Prompted Experimental',
  dual_steered_high: 'Steered',
}

function ReasoningTexts() {
  const [activeComparison, setActiveComparison] = useState('comparison_a')

  const compData = data[activeComparison]
  const conditionLabels = activeComparison === 'comparison_a' ? conditionLabelsA : conditionLabelsB

  return (
    <div className="page">
      <h1>Reasoning Texts</h1>
      <p className="page-description">
        Sample reasoning statements produced by the LLM judge when evaluating text snippets.
        Each reasoning is a one-sentence justification the judge wrote before assigning a numerical score.
        These reasoning texts were later submitted to a separate analyst session for qualitative discourse analysis
        (see Analyst Methodology). Below are 10 sample reasonings per condition per question.
      </p>

      <div className="tab-bar">
        {Object.entries(comparisonLabels).map(([key, label]) => (
          <button
            key={key}
            className={`tab ${activeComparison === key ? 'active' : ''}`}
            onClick={() => setActiveComparison(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {Object.entries(conditionLabels).map(([condKey, condLabel]) => (
        <div key={condKey} style={{ marginBottom: '2rem' }}>
          <h2>{condLabel}</h2>

          <h3>Q1: Crafted vs. Arrived-at</h3>
          <div className="reasonings-list">
            <details className="reasoning-details">
              <summary>View 10 sample Q1 reasonings</summary>
              <div className="reasoning-entries">
                {compData[condKey].q1.map((entry, i) => (
                  <div key={i} className="reasoning-entry">
                    <div className="reasoning-snippet">{entry.text}</div>
                    <div className="reasoning-text">{entry.reasoning}</div>
                  </div>
                ))}
              </div>
            </details>
          </div>

          <h3>Q2: Categorizable vs. Resists</h3>
          <div className="reasonings-list">
            <details className="reasoning-details">
              <summary>View 10 sample Q2 reasonings</summary>
              <div className="reasoning-entries">
                {compData[condKey].q2.map((entry, i) => (
                  <div key={i} className="reasoning-entry">
                    <div className="reasoning-snippet">{entry.text}</div>
                    <div className="reasoning-text">{entry.reasoning}</div>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReasoningTexts

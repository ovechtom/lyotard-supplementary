import { useState } from 'react'
import data from '../data/sentenceSamples.json'

function SentenceSamples() {
  const [activeTab, setActiveTab] = useState('standard_llm')

  const lines = data[activeTab]

  return (
    <div className="page">
      <h1>Comparison A: Sentence Samples</h1>
      <p className="page-description">
        Comparison A evaluates single-line outputs from two generation architectures at the sentence level.
        The LLM judge assessed each line blind to source on two questions: whether the text feels crafted
        or arrived-at (Q1), and whether it belongs to a recognizable mode or resists categorization (Q2).
        Below are 100 sample lines from each condition.
      </p>

      <div className="tab-bar">
        <button
          className={`tab ${activeTab === 'standard_llm' ? 'active' : ''}`}
          onClick={() => setActiveTab('standard_llm')}
        >
          Standard LLM (100 lines)
        </button>
        <button
          className={`tab ${activeTab === 'lstm_vae' ? 'active' : ''}`}
          onClick={() => setActiveTab('lstm_vae')}
        >
          LSTM-VAE (100 lines)
        </button>
      </div>

      <div className="sample-list">
        {lines.map((line, i) => (
          <div key={i} className="sample-item">
            <div className="sample-id">
              {activeTab === 'standard_llm' ? 'LLM' : 'LSTM-VAE'} #{i + 1}
            </div>
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SentenceSamples

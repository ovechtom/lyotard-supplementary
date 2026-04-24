import data from '../data/analystMethodology.json'

function AnalystMethodology() {
  return (
    <div className="page">
      <h1>Analyst Methodology</h1>
      <p className="page-description">
        {data.description}
      </p>

      <div className="protocol-steps">
        {data.steps.map((step) => (
          <div key={step.step} className="step-card">
            <h3>Step {step.step}: {step.title}</h3>
            <p>{step.description}</p>
            {step.categories && (
              <ul className="category-list">
                {step.categories.map((cat) => (
                  <li key={cat.name}>
                    <strong>{cat.name}:</strong> {cat.description}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnalystMethodology

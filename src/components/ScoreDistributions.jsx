function ScoreDistributions() {
  return (
    <div className="page">
      <h1>Score Distributions</h1>
      <p className="page-description">
        Score distributions for Q1 (Crafted vs. Arrived-at) and Q2 (Categorizable vs. Resists Categorization)
        across all conditions in both comparisons.
      </p>

      <h2>Comparison A: Sentence-Level</h2>
      <div className="plot-container">
        <img
          src={import.meta.env.BASE_URL + "fig1_comparison_a_distributions.png"}
          alt="Q1 and Q2 score distributions for Standard LLM vs. LSTM-VAE"
          className="plot-image"
        />
      </div>

      <h2>Comparison B: Passage-Level</h2>
      <div className="plot-container">
        <img
          src={import.meta.env.BASE_URL + "fig2_comparison_b_distributions.png"}
          alt="Q1 and Q2 score distributions for Prompted vs. Steered"
          className="plot-image"
        />
      </div>

      <h2>Cross-Question Correlations</h2>
      <div className="plot-container">
        <img
          src={import.meta.env.BASE_URL + "fig3_q1_vs_q2_scatter.png"}
          alt="Q1 vs. Q2 scatter plot per condition"
          className="plot-image"
        />
      </div>
    </div>
  )
}

export default ScoreDistributions

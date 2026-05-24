function Home() {
  return (
    <div className="home-page">
      <div className="banner-container">
        <img
          src={import.meta.env.BASE_URL + "banner.jpeg"}
          alt="Supplementary Material"
          className="banner-image"
        />
      </div>

      <div className="home-content">
        <p className="supp-label">Supplementary Material Website</p>

        <h1 className="paper-title">
          Is It Happening? Lyotard's Sublime and the Indeterminate in AI-Generated Text
        </h1>

        <div className="authors">
          <p className="author-list">
            Olga Vechtomova
          </p>
          <p className="affiliations">
            University of Waterloo, Canada
          </p>
          <p className="venue">
            Accepted as a short paper at the{' '}
            <a
              href="https://computationalcreativity.net/iccc26/"
              target="_blank"
              rel="noopener noreferrer"
            >
              International Conference on Computational Creativity (ICCC'26)
            </a>
            .
          </p>
        </div>

        <div className="abstract">
          <h2>Abstract</h2>
          <p>
            How do we distinguish between AI-generated text that performs the appearance of creative novelty and text in which something genuinely unforeseen has arisen? We propose a framework grounded in Jean-Fran&ccedil;ois Lyotard's aesthetics of the sublime, which distinguishes between art that bears witness to the indeterminate (what appears when a determining system encounters its own limit) and art that merely recombines established formulae to simulate novelty. We map this distinction onto three modes of AI text generation and evaluate them using an LLM judge that assesses, blind to source, whether texts feel crafted toward an effect or arrived at their qualities without design. Standard LLM generation embodies Lyotard's institutional logic: its outputs are perceived as almost maximally crafted and categorizable. LSTM-VAE generation occupies a position of constitutive disarmament: the judge perceives its outputs as unanticipated, using vocabulary of accident and emergence never applied to LLM outputs. Activation steering creates fissures within the LLM's determination: the judge perceives steered text as "stumbling into" effects rather than designing them, producing categorical friction, recognizable as prose yet containing elements no established mode accounts for. The event itself (the moment when habitual understanding stalls and something opens) is always human: it occurs when what arises within the system's gaps meets a perceiver whose determinations are suspended.
          </p>
        </div>

        <div className="home-sections">
          <h2>About This Supplementary Material</h2>
          <p>
            This website provides supporting material for the paper, including the text samples evaluated in both comparisons, the prompts used for LLM-as-judge evaluation, sample reasoning texts produced by the judge, the methodology used for qualitative discourse analysis, and score distribution visualisations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home

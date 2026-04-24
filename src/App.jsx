import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import SentenceSamples from './components/SentenceSamples'
import PassageSamples from './components/PassageSamples'
import JudgePrompts from './components/JudgePrompts'
import ReasoningTexts from './components/ReasoningTexts'
import AnalystMethodology from './components/AnalystMethodology'
import ScoreDistributions from './components/ScoreDistributions'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sentence-samples" element={<SentenceSamples />} />
        <Route path="passage-samples" element={<PassageSamples />} />
        <Route path="judge-prompts" element={<JudgePrompts />} />
        <Route path="reasoning-texts" element={<ReasoningTexts />} />
        <Route path="analyst-methodology" element={<AnalystMethodology />} />
        <Route path="score-distributions" element={<ScoreDistributions />} />
      </Route>
    </Routes>
  )
}

export default App

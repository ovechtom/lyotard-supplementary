import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/sentence-samples', label: 'Comparison A: Sentence Samples' },
  { path: '/passage-samples', label: 'Comparison B: Passage Samples' },
  { path: '/judge-prompts', label: 'Judge Prompts' },
  { path: '/reasoning-texts', label: 'Reasoning Texts' },
  { path: '/analyst-methodology', label: 'Analyst Methodology' },
  { path: '/score-distributions', label: 'Score Distributions' },
]

function Layout() {
  return (
    <div className="app-layout">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h2>Supplementary Material</h2>
        </div>
        <ul className="nav-list">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout

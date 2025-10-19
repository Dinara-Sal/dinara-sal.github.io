import './App.css'
import { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const projects = [
    {
      id: 1,
      title: "Adventure Works Analysis",
      description: "Power BI dashboard for AdventureWorks including KPIs summary, sales report, product report and breakdown by territory and country.",
      preview: "/assets/project-2-preview-full.png",
      fallback: "📊",
      pdfFile: "/assets/Adventure Works.pdf",
      skills: ["Power BI", "DAX", "Data Visualization"]
    },
    {
      id: 2,
      title: "Vancouver Weather Station Analysis",
      description: "Analysis of weather data from one Vancouver weather station, including data exploration, cleaning, transformation and statistical analysis. Tools used: Excel, R studio, Python.",
      preview: "/assets/project-1-preview.png",
      fallback: "🌡️",
      pdfFile: "/assets/Vancouver Weather Station Data - Analysis.pdf",
      skills: ["Python", "R", "Excel", "Statistical Analysis", "Data Cleaning"]
    }
  ]

  const downloadPDF = (filePath: string, filename: string) => {
    const link = document.createElement('a')
    link.href = filePath
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDark ? '☀️' : '🌙'}
      </button>
      
      <header className="header">
        <div className="profile-section">
          <img 
            src="/assets/main_picture.jpg" 
            alt="Dinara Salikhadenova" 
            className="profile-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiByeD0iNzUiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzY2N2VlYTtzdG9wLW9wYWNpdHk6MSIgLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzY0YmEyO3N0b3Atb3BhY2l0eToxIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjx0ZXh0IHg9Ijc1IiB5PSI4NSIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iNzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+RDwvdGV4dD4KPC9zdmc+';
            }}
          />
          <div className="profile-info">
            <h1>Dinara Salikhadenova</h1>
            <h2>Junior Data Analyst</h2>
            <p>Data Analyst with a BSc in Economics and an Applied Data Analytics Certificate from BCIT.</p>
            <p>Skilled in Python, SQL, Power BI, and Tableau.</p>
            <p>Focused on turning data into clear, actionable intelligence.</p>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="projects-section">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-preview">
                  <div className="preview-container">
                    <img 
                      src={project.preview} 
                      alt={`${project.title} preview`}
                      className="preview-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="preview-fallback" style={{display: 'none'}}>
                      {project.fallback}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="skills-tags">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <button 
                      className="download-btn"
                      onClick={() => downloadPDF(project.pdfFile, `${project.title}.pdf`)}
                    >
                      📄 Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/dinara-salikhadenova/" className="linkedin-link">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

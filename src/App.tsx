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
      preview: "/src/assets/project-2-preview-full.png" ,
      fallback: "📊",
      pdfFile: "/src/assets/Adventure Works.pdf",
      skills: ["Power BI", "DAX", "Data Visualization"]
    },
    {
      id: 2,
      title: "Vancouver Weather Station Analysis",
      description: "Analysis of weather data from one Vancouver weather station, including data exploration, cleaning, transformation and statistical analysis. Tools used: Excel, R studio, Python.",
      preview: "/src/assets/project-1-preview.png",
      fallback: "🌡️",
      pdfFile: "/src/assets/Vancouver Weather Station Data - Analysis.pdf",
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
            src="/src/assets/main_picture.jpg" 
            alt="Dinara Salikhadenova" 
            className="profile-image"
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

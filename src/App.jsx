import "./App.css"

function App() {

  const skills = [
    "Python",
    "YOLOv8",
    "OpenCV",
    "React",
    "Flask API",
    "Computer Vision"
  ]

  const projects = [
    {
      title:"Fire & Smoke Detection",
      desc:"AI model that detects fire and smoke using YOLO"
    },
    {
      title:"AI CCTV Monitoring",
      desc:"Real-time object detection from CCTV cameras"
    },
    {
      title:"Crosswalk Detection",
      desc:"Detects vehicles stopping on crosswalk"
    }
  ]

  return (
    <div className="container">

      <h1>AI Developer Portfolio</h1>
      <p>Computer Vision | YOLO | Smart CCTV</p>

      <h2>Skills</h2>

      <div className="skills">
        {skills.map((s,i)=>(
          <div className="skill" key={i}>
            {s}
          </div>
        ))}
      </div>

      <h2>Projects</h2>

      <div className="projects">
        {projects.map((p,i)=>(
          <div className="card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
import { useState, useEffect } from "react";

import "./App.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLine, FaGoogle } from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import profile from "./assets/profile.jpg";

function Layout() {

const [showResume,setShowResume] = useState(false);
const [loading,setLoading] = useState(true);

useEffect(()=>{

setTimeout(()=>{
setLoading(false)
},1500)

},[])


/* loading screen */

if(loading){
return(

<div className="loader">

<div className="loader-circle"></div>

<h2>Loading Portfolio...</h2>

</div>

)
}


return (

<div className="app">

{/* NAVBAR */}
<nav className="navbar">

<div className="menu">

<Link to="/">
<button>Home</button>
</Link>

<button onClick={()=>setShowResume(true)}>
Bio
</button>

<Link to="/about">
<button>About Me</button>
</Link>

<Link to="/photos">
<button>Photos</button>
</Link>

<Link to="/transcript">
<button>Transcript</button>
</Link>

<Link to="/contact">
<button>Contact</button>
</Link>

</div>

</nav>


<Routes>

{/* HOME PAGE */}
<Route path="/" element={
<>
<section className="hero page">

<div className="hero-left">

<h3>Hey, I'm</h3>

<h1 className="name">
Nattasit
<br/>
SONGSAWANG
</h1>

<p className="role">
Aduino / Network / Model AI
</p>

</div>

<div className="hero-right">

<img src={profile} alt="profile" loading="lazy"/>

</div>

</section>
</>
} />


{/* ABOUT PAGE */}
<Route path="/about" element={

<section className="about page">

<div className="about-container">

<h1 className="about-title">
About Me
</h1>

<p className="about-text">
I am interested in computer technology and embedded systems. I have experience working with Arduino to create small electronic projects and learn about programming and hardware. I enjoy learning new technologies and improving my skills in IT and electronics.
</p>

<p className="about-text">
I am interested in IT support and computer technology. I have basic skills in troubleshooting computer problems, installing software, and maintaining computer systems. I enjoy helping others solve technical issues and learning new IT skills
</p>

<a 
href="/Resume_nattasit.pdf"
target="_blank"
rel="noopener noreferrer"
className="about-btn"
>
View Full Resume
</a>

</div>


{/* TECHNICAL SKILLS */}

<div className="skills-section">

<h1 className="skills-title">
Technical Mastery
</h1>

<div className="skills-grid">

<div className="skill-card">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"/>
<p>Python</p>
</div>

<div className="skill-card">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
<p>React</p>
</div>

<div className="skill-card">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"/>
<p>Node.js</p>
</div>

<div className="skill-card">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"/>
<p>Docker</p>
</div>

<div className="skill-card">
<img src="https://cdn-icons-png.flaticon.com/512/226/226777.png"/>
<p>OpenCV</p>
</div>

<div className="skill-card">
<img src="https://cdn-icons-png.flaticon.com/512/2103/2103832.png"/>
<p>Machine Learning</p>
</div>

<div className="skill-card">
<img src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"/>
<p>Deep Learning</p>
</div>

<div className="skill-card">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"/>
<p>Firebase</p>
</div>

</div>

</div>

</section>

} />


{/* PHOTOS */}
<Route path="/photos" element={

<section className="photos page">

<h2>Photos</h2>

<div className="photo-grid">

<img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"/>
<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"/>
<img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c"/>

<img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"/>
<img src="https://images.unsplash.com/photo-1521119989659-a83eee488004"/>
<img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"/>

</div>

</section>

} />


{/* TRANSCRIPT */}
<Route path="/transcript" element={

<section className="transcript-page page">

<div className="transcript-container">

<div className="transcript-stats">

<div className="stat-card">
<p className="stat-label">CURRENT GPAX</p>
<h2>2.20</h2>
</div>

<div className="stat-card">
<p className="stat-label">TOTAL CREDITS</p>
<h2>52</h2>
</div>

</div>

<a
href="/transcript.pdf"
download
className="download-btn"
>
⬇ DOWNLOAD TRANSCRIPT
</a>

<div className="semester">

<h1>Cumulative grade for 3 semesters</h1>

<div className="gpa-pill">
GPAX : 2.20
</div>

</div>

</div>

</section>

} />


{/* CONTACT */}
<Route path="/contact" element={

<section className="contact page">

<div className="contact-left">

<img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"/>

</div>

<div className="contact-right">

<h2>Contact</h2>

<h4>Manager</h4>
<p>Nattasit Songsawang</p>
<p>Email : piiick777@gmail.com</p>
<p>Tel : 0955962720</p>
<p>Ig : po_pick</p>
<p>Facebook : ณัฐสิทธิ์ ทรงสว่าง</p>
<p>Line: pick511</p>

<div className="map-box">

<iframe
src="https://www.google.com/maps?q=Nonthaburi&output=embed"
loading="lazy"
></iframe>

<a
href="https://maps.app.goo.gl/odUCjYGU4cETsCMA6"
target="_blank"
className="map-btn"
>
<br></br>
Open Google Maps
</a>

</div>

</div>

</section>

} />

</Routes>


{/* SOCIAL BAR */}
<div className="social-bar">

<a href="https://www.facebook.com/nath.siththi.thrng.swang" target="_blank">
<FaFacebookF/>
</a>

<a href="https://line.me/ti/p/Q1G-Mst6vU" target="_blank">
<FaLine/>
</a>

<a href="https://www.instagram.com/_po.pick_/" target="_blank">
<FaInstagram/>
</a>

</div>


{/* RESUME OVERLAY */}
{showResume && (

<div className="resume-overlay">

<button
className="close-btn"
onClick={()=>setShowResume(false)}
>
✕
</button>

<div className="resume-content">

<h1 className="resume-title">Resume</h1>

<div className="resume-info">

<h4>My nickname is pick</h4>
<p>branch : ElECTRONICS COMPUTER</p>
<p>Date of Birth : 7  November 2003.</p>
<p>Languages: English, German</p>
<p>study at : King Mongkut's University of Technology North Bangkok.</p>

</div>

<hr/>

<div className="resume-grid">

<div>
<h3>Special Skills</h3>
<p>write a program Arduino</p>
<p>Web Design</p>
<p>Mobile App and MySQL</p>
<p>Ai and Python</p>
<p>Git/Github and vercel</p>
<p>Network and Cybersecuoity</p>
</div>

<div>
<h3>Faculty and major</h3>
<p>Faculty College of Industrial Technology</p>
<p>electronic engineering technology</p>
</div>

<div>
<h3>Work EXPERIENCE</h3>
<p>I have experience working with microcontrollers to measure current and calculate electricity costs.</p>
<p>I once worked on a project about training an AI model to detect people.</p>
<p>I have experience working with LAN systems.</p>
<p>I have experience working with mobile apps and MySQL databases.</p>
<p>I have experience working with computer networks and basic system maintenance</p>
</div>

<div>
<h3>Education </h3>
<p>- Bachelor’s Degree  in eletronics computer technology, 2026 college of industrial technology,king mongkut’s university of technology north bangkok.</p>
<p>- Diproma in electronics ,2024, GPA 3.75, Suphanburi tecnical college.</p>
<p>- certificate in vocational education in computer programmer,2021, gpa 3.5 suphanburi vocational college.</p>
</div>

<div>
<h3>What I'm interested in</h3>
<p>I am interested in IT and always try to improve my technical knowledge</p>
<p>I enjoy inventing things related to electronics and Arduino</p>
<p>I enjoy learning new technologies and improving my IT skills</p>
</div>

<div>
<h3>Position sought</h3>
<p>IT Support</p>
<p>IoT Developer</p>
<p>IT Assistant</p>
<p>Arduino and IoT Developer</p>
</div>

</div>

</div>

</div>

)}

</div>
);
}

export default function App(){
return(
<BrowserRouter>
<Layout/>
</BrowserRouter>
);
}

import { useState } from "react";
import "./App.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Layout() {

  const [showResume,setShowResume] = useState(false);

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
      <section className="hero">

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

          <img
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40"
            loading="lazy"
          />

        </div>

      </section>
      </>
      } />


      {/* ABOUT PAGE */}
      <Route path="/about" element={

      <section className="about">

        <div className="about-container">

        <h1 className="about-title">
        About Me
        </h1>

        <p className="about-text">
        I'm a paragraph. Click here to add your own text and edit me. 
        It’s easy. Just click “Edit Text” or double click me to add 
        your own content and make changes to the font. Feel free to 
        drag and drop me anywhere you like on your page. I’m a great 
        place for you to tell a story and let your users know a little 
        more about you.
        </p>

        <p className="about-text">
        This is a great space to write a long text about your company 
        and your services. You can use this space to go into a little 
        more detail about your company. Talk about your team and what 
        services you provide. Tell your visitors the story of how you 
        came up with the idea for your business and what makes you 
        different from your competitors. Make your company stand out 
        and show your visitors who you are.
        </p>

        <button
        className="about-btn"
        onClick={()=>setShowResume(true)}
        >
        View Full Resume
        </button>

        </div>

      </section>

      } />


      {/* PHOTOS */}
      <Route path="/photos" element={

      <section className="photos">

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

<section className="transcript-page">

  <div className="transcript-container">

    <div className="transcript-stats">

      <div className="stat-card">
        <p className="stat-label">CURRENT GPAX</p>
        <h2>2.20</h2>
      </div>

      <div className="stat-card">
        <p className="stat-label">TOTAL CREDITS</p>
        <h2>63</h2>
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

      <h1>1ST SEMESTER 2024</h1>

      <div className="gpa-pill">
        GPAX : 2.20
      </div>

    </div>

  </div>

</section>

} />


      {/* CONTACT */}
      <Route path="/contact" element={

      <section className="contact">

        <div className="contact-left">

          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"/>

        </div>

        <div className="contact-right">

          <h2>Contact</h2>

          <h4>Manager</h4>
          <p>Bruce Robertson</p>
          <p>Email : info@mysite.com</p>
          <p>Tel : 123-456-7890</p>

        </div>

      </section>

      } />

      </Routes>


      {/* SOCIAL BAR */}
      <div className="social-bar">

        <a href="https://facebook.com" target="_blank">
          <FaFacebookF/>
        </a>

        <a href="https://twitter.com" target="_blank">
          <FaTwitter/>
        </a>

        <a href="https://instagram.com" target="_blank">
          <FaInstagram/>
        </a>

        <a href="https://youtube.com" target="_blank">
          <FaYoutube/>
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
                <p>Mobile App</p>
                <p>Ai and Python</p>
                 <p>MySQL</p>
                <p>Network and Cybersecuoity</p>
              </div>

              <div>
                <h3>Faculty and major</h3>
                <p>Faculty College of Industrial Technology</p>
                <p>electronic engineering technology</p>
              </div>

              <div>
                <h3>Film</h3>
                <p>2035 / Title / Director / Role</p>
                <p>2035 / Title / Director / Role</p>
                <p>2035 / Title / Director / Role</p>
              </div>

              <div>
                <h3>Education & Training</h3>
                <p>Institution / Workshop</p>
                <p>Institution / Workshop</p>
                <p>Institution / Workshop</p>
              </div>

              <div>
                <h3>TV</h3>
                <p>2035 / Production House / Role</p>
                <p>2035 / Production House / Role</p>
              </div>

              <div>
                <h3>Awards</h3>
                <p>2035 / Description</p>
                <p>2035 / Description</p>
                <p>2035 / Description</p>
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
import { useState } from "react";
import "./App.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function App() {

  const [showResume,setShowResume] = useState(false);

  const scrollToSection = (id)=>{
    document.getElementById(id)?.scrollIntoView({
      behavior:"smooth"
    });
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">Daniel Martinez</div>

        <div className="menu">

          <button onClick={()=>setShowResume(true)}>
            Bio
          </button>

          <button onClick={()=>scrollToSection("about")}>
            About Me
          </button>

          <button onClick={()=>scrollToSection("photos")}>
            Photos
          </button>

          <button onClick={()=>scrollToSection("transcript")}>
            Transcript
          </button>

          <button onClick={()=>scrollToSection("contact")}>
            Contact
          </button>

        </div>

      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-left">

          <h3>Hey, I'm</h3>

          <h1 className="name">
            Nattasit
            <br/>
            SONGSAWANG
          </h1>

          <p className="role">
            Actor / Performer / Model
          </p>

        </div>

        <div className="hero-right">

          <img
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40"
            loading="lazy"
          />

        </div>

      </section>


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


      {/* ABOUT SECTION */}

      <section id="about" className="about">

        <h2>About Me</h2>

        <p>
          I am an actor, performer and model passionate about storytelling
          and creative expression. My experience spans theater, film,
          television and commercial projects.
        </p>

      </section>


      {/* PHOTOS SECTION */}

      <section id="photos" className="photos">

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


      {/* TRANSCRIPT */}

      <section id="transcript" className="transcript">

        <h2>Transcript</h2>

        <ul>
          <li>2023 — Bachelor of Computer Science</li>
          <li>2020 — High School Diploma</li>
          <li>2018 — Acting Workshop</li>
        </ul>

      </section>


      {/* CONTACT */}

      <section id="contact" className="contact">

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

              <p>Born: 1985</p>
              <p>Height: 5'11</p>
              <p>Eye Color: Brown</p>
              <p>Hair Color: Brown</p>
              <p>Languages: English, German</p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}
import { useState } from "react";
import "./App.css";

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

          <button onClick={()=>scrollToSection("video")}>
            Video
          </button>

          <button onClick={()=>scrollToSection("photos")}>
            Photos
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

          <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40"/>

        </div>

      </section>


      {/* SOCIAL BAR */}
      <div className="social-bar">

        <a href="#">f</a>
        <a href="#">t</a>
        <a href="#">ig</a>
        <a href="#">yt</a>

      </div>



      {/* VIDEO SECTION */}

      <section id="video" className="video">

        <h2>Video</h2>

        <div className="video-box">

          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="video"
            allowFullScreen
          />

        </div>

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

            <hr/>

            <div className="resume-grid">

              <div>
                <h3>Special Skills</h3>
                <p>Physical Comedy</p>
                <p>Singing</p>
                <p>Swimming</p>
                <p>Football</p>
              </div>

              <div>
                <h3>Theater</h3>
                <p>2035 / Play / Director / Role</p>
                <p>2035 / Play / Director / Role</p>
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
import { Link } from "react-router-dom";
import SocialBar from "../components/SocialBar";
import "../App.css";

export default function Bio() {
  return (
    <div className="resume-page">

      <Link to="/" className="back-btn">✕</Link>

      <div className="resume-container">

        <h1 className="resume-title">Resume</h1>

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
          </div>

          <div>
            <h3>Education</h3>
            <p>Institution / Workshop</p>
            <p>Institution / Workshop</p>
          </div>

        </div>

      </div>

      <SocialBar />

    </div>
  );
}
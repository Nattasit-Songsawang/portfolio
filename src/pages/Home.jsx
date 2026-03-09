import { Link } from "react-router-dom";
import "../App.css";
import SocialBar from "../components/SocialBar";

export default function Home() {
  return (
    <div className="app">

      <nav className="navbar">

        <div className="logo">Daniel Martinez</div>

        <div className="menu">
          <Link to="/bio">Bio</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </nav>

      <section className="hero">

        <div className="hero-left">

          <h3>Hey, I'm</h3>

          <h1 className="name">
            Nattasit
            <br />
            SONGSAWANG
          </h1>

          <p className="role">
            Actor / Performer / Model
          </p>

        </div>

        <div className="hero-right">
          <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40" />
        </div>

      </section>

      <SocialBar />

    </div>
  );
}
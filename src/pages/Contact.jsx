import { Link } from "react-router-dom";
import SocialBar from "../components/SocialBar";
import "../App.css";

export default function Contact() {
  return (
    <div className="contact">

      <Link to="/" className="back-home">← Back</Link>

      <div className="contact-left">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" />
      </div>

      <div className="contact-right">

        <h2>Contact</h2>

        <h2>Manager</h2>
        <p>Nattasit Songsawang</p>
        <p>Email : piiick777@gmail.com</p>
        <p>Tel : 0955962720</p>
        <p>Ig : po_pick</p>
        <p>Facebook : ณัฐสิทธิ์ ทรงสว่าง</p>
        <p>Line: pick511</p>

      </div>

      <SocialBar />

    </div>
  );
}
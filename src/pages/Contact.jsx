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

        <h4>Manager</h4>
        <p>Bruce Robertson</p>
        <p>Email : info@mysite.com</p>
        <p>Tel : 123-456-7890</p>

      </div>

      <SocialBar />

    </div>
  );
}
import { Link } from "react-router-dom";
import SocialBar from "../components/SocialBar";
import "../App.css";

export default function Photos() {
  return (
    <div className="photos">

      <Link to="/" className="back-home">← Back</Link>

      <h2>Photos</h2>

      <div className="photo-grid">

        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" />
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" />
        <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c" />

        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" />
        <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004" />
        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1" />

      </div>

      <SocialBar />

    </div>
  );
}
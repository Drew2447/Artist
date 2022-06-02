import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="app-container">
      <div className="navbar">
        <button><Link to="/">Welcome</Link></button>
        <button><Link to="/artists">Artists</Link></button>
        <button><Link to="/artists/new">New Artist</Link></button>
        <button><Link to="/about">About</Link></button>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
      <div className="footer">
        <p>Andrew Did it.</p>
      </div>
    </div>
  );
}
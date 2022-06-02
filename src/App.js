import { Route, Routes } from "react-router-dom";
import About from "./About";
import ArtistForm from "./ArtistForm";
import Artists from "./Artists";
import EditArtistForm from "./EditArtistForm";
import Home from "./Home";
import "./App.css";
import Welcome from "./Welcome";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Welcome />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/new" element={<ArtistForm />} />
        <Route path="/artists/:id/edit" element={<EditArtistForm />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

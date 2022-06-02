import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./providers/DataProviders";

export default function ArtistForm() {
  let navigate = useNavigate();
  const data = useContext(DataContext);
  let [band, setBand] = useState("");
  let [song, setSong] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newArtist = { band, song, id: Math.random() };
    data.addArtist(newArtist);
    navigate("/Artists");
  };
  return (
    <div className="page">
      <h1>Add Artist Here</h1>
      <form onSubmit={handleSubmit}>
        <p>band</p>
        <input value={band} onChange={(e) => setBand(e.target.value)} />
        <p>song</p>
        <input value={song} onChange={(e) => setSong(e.target.value)} />
        <button>add</button>
      </form>
    </div>
  );
}

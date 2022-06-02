import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DataContext } from "./providers/DataProviders";

export default function EditArtistForm() {
  let navigate = useNavigate();
  let location = useLocation();
  const data = useContext(DataContext);
  let [band, setBand] = useState(
    location.state && location.state.band
  );
  let [song, setSong] = useState(location.state && location.state.song);
  let params = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newArtist = { id: parseInt(params.id), song, band };
    data.updateContact(newArtist);
    navigate("/Artist");
  };
  return (
    <div className="page">
      <h1>EDIT Artist Here</h1>
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

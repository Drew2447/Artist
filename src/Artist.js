import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./providers/DataProviders";

const Artist = ({ id, band, song }) => {
  const data = useContext(DataContext);
  return (
    <div className="artist">
      <p>{band}</p>
      <p>song: {song}</p>
      <button><Link to={`/artists/${id}/edit`} state={{ id, band, song }}>edit</Link></button>
      <button onClick={() => data.deleteArtist(id)}> delete</button>
    </div>
  );
};
export default Artist;
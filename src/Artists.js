import { useContext} from "react";
import Artist from "./Artist";
import { DataContext } from "./providers/DataProviders";

export default function Artists() {
  const data = useContext(DataContext);
  const renderArtists = () => {
    return data.artists.map((c) => {
      return <Artist key={c.id} {...c} />;
    });
  };
  return (
    <div className="page">
      <h1>Artists</h1>
      {renderArtists()}
      <hr />
    </div>
  );
}

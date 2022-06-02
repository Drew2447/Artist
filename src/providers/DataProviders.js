import React, { useState } from "react";

export const DataContext = React.createContext();




const initialArtists = [
  { id: 1, band: "State of Mine", song: 'Gods Country' },
  { id: 2, band: "No Resolve", song: 'Worth The Fight' }
];


const DataProviders = (props) => {
  const [artists, setArtists] = useState(initialArtists);

  const addArtist = (artist) => {
    setArtists([artist, ...artists]);
  };

  const deleteArtist = (id) => {
    setArtists(artists.filter((c) => c.id !== id));
  };

  const updateArtist = (artist) => {
    let newArtists = artists.map((c) => (c.id === artist.id ? artist : c));
    setArtists(newArtists);
  };
  return (
    <>
      <DataContext.Provider
        value={{ artists, addArtist, deleteArtist, updateArtist, x: 1 }}
      >
        {props.children}
      </DataContext.Provider>
    </>
  );
};

export default DataProviders;
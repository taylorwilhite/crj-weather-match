import React from 'react';

const Musicplayer = ({tracks}) => {
  return (
    <div className="Musicplayer">
      {tracks.map(track => 
        <p>{track.name}</p>
      )}
    </div>
  );
};

export default Musicplayer;
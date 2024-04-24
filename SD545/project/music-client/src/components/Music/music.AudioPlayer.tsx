import AudioPlayer from "react-h5-audio-player";
import { useEffect, useState } from "react";
import { Playlists } from "../../types/playlist";


type Props = {
  srcIndex: string;
  playlist: Playlists[];
  onSetIndex:(src:string)=>void;
};

export default function MusicPlayer({ srcIndex, playlist, onSetIndex }: Props) {
  const [currentTrack, setTrackIndex] = useState(+srcIndex)
  

  let music = playlist[+srcIndex];

  useEffect(()=>{
    onSetIndex(currentTrack.toString())
  },[currentTrack])



  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };
  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack > 0 ? currentTrack - 1 : playlist.length - 1
    );
  };




  const handleEnd = () => {
    const index = currentTrack < playlist.length - 1 ? currentTrack + 1 : 0;
    setTrackIndex(index);
  };

  return (
    <div className="container">
      {music ? <h1>{music.title}</h1> : <h1>Play a song!</h1>}
      {music && 
       <AudioPlayer
        showSkipControls
        src={`http://localhost:9000/${[music?.urlPath]}`}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
        onEnded={handleEnd}
        />
      }
     
    </div>
  );
}

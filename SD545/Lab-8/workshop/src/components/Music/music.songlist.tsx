import { MouseEvent, useEffect, useState } from "react";
import minus_icon  from "../../images/minus_icon.jpg";
import play_icon from "../../images/play_icon.png";
import happy from "../../images/play_icon.png";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import add_icon from "../../images/add_icon.jpg";
import musicServices from "../../apis/services/music.services";
import { Playlists } from "../../types/playlist";



export default function List() {

  const [musicList, setMusicList] = useState<Playlists[]>([]);
  const [list, setList] = useState<Playlists[]>([])


  
  useEffect(() => {
    async function getMusicList() {
      const response = await musicServices.list();
      setMusicList(response.data);
      console.log(response);
    }
    getMusicList();
  }, []);

  const [playlist, setPlaylist] = useState<Playlists[]>([]);


  
  useEffect(() => {
   
    async function getPlayList() {
      const response = await musicServices.playlist();
      setPlaylist(response.data);
    }
    getPlayList();

  }, []);

  const removeFromPlaylist = (e: MouseEvent<HTMLImageElement>) => {
    const value = e.currentTarget.alt;
    setPlaylist(playlist.filter((music) => music.title !== value))
    
  };

  const addToPlaylist = (e: MouseEvent<HTMLImageElement>) => {
    const value = e.currentTarget.alt;
    console.log(value);
    

    const isFound = playlist.find((music) => music.title === value);
    if (!isFound) {
      const addMusic = musicList.find((play) => play.title === value);
      setPlaylist([...playlist, addMusic!]);

    }
  };

  return (
    <>
     <h1>Songs you may interst</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Index</th>
            <th scope="col">Title</th>
            <th scope="col">Release Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {musicList.map((music, index) => (
            <tr key={music.id}>
              <th scope="row">{index + 1}</th>
              <td>{music.title}</td>
              <td>{music.releaseDate}</td>
              <td className="align-text-top" style={{ textAlign: "center" }}>
                <img
                  src={add_icon}
                  alt={music.title}
                  width="30"
                  height="30"
                  onClick={addToPlaylist}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table> 
      <h1>Your Playlist</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Index</th>
            <th scope="col">Title</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {playlist.map((music, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{music.title}</td>
              <td className="align-text-top" style={{ textAlign: "center" }}>
                <div
                  className="grid text-center"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr",
                    gap: "5rem",
                  }}
                >
                  <img
                    src={minus_icon}
                    alt={music.title}
                    width="20"
                    height="20"
                    onClick={removeFromPlaylist}
                  />
                  <img
                    src={play_icon}
                    alt="music logo"
                    width="20"
                    height="20"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AudioPlayer autoPlay src={happy} onPlay={(e) => console.log("onPlay")} />
    </>
  )
}

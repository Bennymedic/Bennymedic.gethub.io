import { MouseEvent, useEffect, useState } from "react";
import PubSub from "pubsub-js";
import "react-h5-audio-player/lib/styles.css";
import JinkeMusicPlayer from "./music.AudioPlayer2";

import minus_icon from "../../images/minus_icon.jpg";
import play_icon from "../../images/playicon.png";
import { Playlists } from "../../types/playlist";
import MusicPlayer from "./music.AudioPlayer";
import musicServices from "../../apis/services/music.services";



export default function Playlist() {
  const [playlist, setPlaylist] = useState<Playlists[]>([]);
  const [index, setIndex] = useState("");

  useEffect(() => {
    async function getPlayList() {
      const response = await musicServices.playlist();
      setPlaylist(response.data);
    }
    getPlayList();

    const addToPlaylist = PubSub.subscribe("add", (msg, data) => {
      setPlaylist(data);
    });
    return () => {
      PubSub.unsubscribe(addToPlaylist);
    };
  }, []);

  const removeFromPlaylist = async (e: MouseEvent<HTMLImageElement>) => {
    const songId = e.currentTarget.alt;
    //setPlaylist(playlist.filter((music) => music.songId !== songId));
    try {
      const response = await musicServices.removeFromPlaylist(songId);
      setPlaylist(response.data)
    } catch (e) {
      console.log(e);
    }
  };
  const playMusic = (e: MouseEvent<HTMLImageElement>) => {
    const value = e.currentTarget.alt;
    setIndex(value);
  };

  return (
    <div>
      <h1>Your Playlist</h1>
      <table className="table table-hover table-bordered text-center table-bordered text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <thead>
          <tr>
            <th scope="col">Index</th>
            <th scope="col">Title</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {playlist.map((music, index) => (
            <tr key={music.id}>
              <th scope="row">{index + 1}</th>
              <td>{music.title}</td>
              <td className="align-text-top" style={{ textAlign: "center" }}>
                <div
                  className="row justify-content-md-center grid text-center"
                >
                  <img
                    src={minus_icon}
                    alt={music.songId}
                    width="20"
                    height="20"
                    onClick={removeFromPlaylist}
                    className="col-md-auto"
                  />
                  <img
                    src={play_icon}
                    alt={index.toString()}
                    width="20"
                    height="20"
                    onClick={playMusic}
                    className="col-md-auto"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <MusicPlayer srcIndex={index} onSetIndex={setIndex} playlist={playlist} />

      {/* <JinkeMusicPlayer playlist={playlist}/> */}
    </div>
  );
}

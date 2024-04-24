
import { MouseEvent, useEffect, useState } from "react";
import { Playlists } from "../../types/playlist";
import add_icon from "../../images/add_icon.jpg";
import musicServices from "../../apis/services/music.services";
import PubSub from "pubsub-js";


export default function List() {
  const [musicList, setMusicList] = useState<Playlists[]>([]);


  useEffect(() => {
    async function getMusicList() {
      const response = await musicServices.list();
      setMusicList(response.data);
      console.log(response);
    }
    getMusicList();

    const addToPlaylist = PubSub.subscribe("musicList", (msg, data) => {
      setMusicList(data);
    });
    return () => {
      PubSub.unsubscribe(addToPlaylist);
    };
  }, []);


  const addToPlaylist = async (e: MouseEvent<HTMLImageElement>) => {
    const id = e.currentTarget.alt;
    try {
      const response = await musicServices.addToPlaylist(id);
       PubSub.publish('add',response.data);
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <>
      <h1>Songs you may interst</h1>
      <table className="table table-hover table-bordered text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded">
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
                  alt={music.id}
                  width="30"
                  height="30"
                  onClick={addToPlaylist}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

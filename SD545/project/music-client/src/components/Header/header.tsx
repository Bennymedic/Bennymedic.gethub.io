
import { KeyboardEvent } from "react";
import logo from "../../images/logo.png";
import { Playlists } from "../../types/playlist";
import musicServices from "../../apis/services/music.services";
import { useNavigate } from "react-router-dom";
import PubSub from "pubsub-js";

export default function Header() {
  const navigator = useNavigate()
 
  async function getMusicList(value:string) {
    const response = await musicServices.list(value);
    PubSub.publish('musicList', response.data);
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }


  const search = (e:KeyboardEvent<HTMLInputElement>)=>{
    const value = e.currentTarget.value.trim()
    if (e.key === 'Enter') {
      e.preventDefault();
        getMusicList(value);
    }
    
  }
  return (
    <header className="py-3 mb-3 border-bottom">
        <div
          className="container-fluid d-grid gap-3 align-items-center"
          style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}
        >
          <div>
            <img
              className="mb-4 mt-4 ml-4"
              src={logo}
              alt="music logo"
              width="72"
              height="57"
            />
          </div>

          <div className="d-flex align-items-center">
            <form className="w-100 me-3" role="search" onSubmit={handleSubmit}>
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                onKeyUp={search}
              />
            </form>

            <div className="flex-shrink-0 dropdown">
              <button type="button" className="btn btn-outline-primary me-2" onClick={()=>navigator('/')}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
  )
}

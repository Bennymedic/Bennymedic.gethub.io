
import Login from "./pages/login";


import Header from "./components/Header/header";
import List from "./components/Music/music.songlist";


function App() {

  return (
    <div className="container">
      <Login />
      <Header />
      <List />
      {/* <Playlist/> */}
    </div>
  );
}

export default App;

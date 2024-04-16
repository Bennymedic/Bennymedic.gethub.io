import React, { useState } from "react";

import "./App.css";
import { Users } from "./types/users";
import List from "./components/List";
import Search from "./components/search";
import SearchRespnse from "./types/searchResponse";

function App() {


  return (
    <div className="App">
      <div id="app">
        <div className="container">
          <Search />
          <List/>
        </div>
      </div>
    </div>
  );
}

export default App;

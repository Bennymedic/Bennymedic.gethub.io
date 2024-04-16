import React, { useState } from "react";

import "./App.css";
import { Users } from "./types/users";
import List from "./components/List";
import Search from "./components/search";
import SearchRespnse from "./types/searchResponse";

function App() {
  const [username, setUsername] = useState("");

  const [searchResponse, setSearchResponse] = useState<SearchRespnse>({
    isFirst: true,
    isLoading: false,
    isError: false,
    users: [],
  });

  return (
    <div className="App">
      <div id="app">
        <div className="container">
          <Search onSetsearchResponse={setSearchResponse} />
          <List {...searchResponse} />
        </div>
      </div>
    </div>
  );
}

export default App;

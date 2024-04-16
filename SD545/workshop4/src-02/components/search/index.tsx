import React, { useRef, useState } from "react";
import { Users } from "../../types/users";
import axios from "axios";
import SearchRespnse from "../../types/searchResponse";

type Props = {
  onSetsearchResponse: (users: SearchRespnse) => void;
};

export default function Search(props: Props) {
  // const [username, setUsername] = useState("");

  const { onSetsearchResponse } = props;
  const textRef = useRef<HTMLInputElement | null>(null);

  const baseUrl = "https://api.github.com/search/users?q=";

  const handleSearch = async () => {
    try {
      onSetsearchResponse({
        isFirst: false,
        isLoading: true,
        isError: false,
        users: [],
      });
      const response = await axios.get(baseUrl + textRef.current!.value);
      console.log(response);
      if (response.status === 200) {
        onSetsearchResponse({
          isFirst: false,
          isLoading: false,
          isError: false,
          users: response.data.items,
        });
      } else {
        throw new Error("No input");
      }
    } catch (e) {
      onSetsearchResponse({
        isFirst: false,
        isLoading: false,
        isError: true,
        users: [],
      });
    }
  };
  return (
    <>
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            // onChange={(e) => setUsername(e.target.value)}
            ref={textRef}
          />
          &nbsp;
          <button onClick={handleSearch}>Search</button>
        </div>
      </section>
    </>
  );
}

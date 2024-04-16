import React, { useRef, useState } from "react";
import { Users } from "../../types/users";
import axios from "axios";
import SearchRespnse from "../../types/searchResponse";
import PubSub from "pubsub-js";

export default function Search() {
  const textRef = useRef<HTMLInputElement | null>(null);

  const baseUrl = "https://api.github.com/search/users?q=";

  const handleSearch = async () => {
    try {
      PubSub.publish("sd545", {
        isFirst: false,
        isLoading: true,
        isError: false,
        users: [],
      });
      const response = await axios.get(baseUrl + textRef.current!.value);
      console.log(response);
      if (response.status === 200) {
        PubSub.publish("sd545", {
          isFirst: false,
          isLoading: false,
          isError: false,
          users: response.data.items,
        });
      } else {
        throw new Error("No input");
      }
    } catch (e) {
      PubSub.publish("sd545", {
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
            ref={textRef}
          />
          &nbsp;
          <button onClick={handleSearch}>Search</button>
        </div>
      </section>
    </>
  );
}

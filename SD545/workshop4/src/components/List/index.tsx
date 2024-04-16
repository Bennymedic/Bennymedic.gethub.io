import { useEffect, useState } from "react";
import SearchRespnse from "../../types/searchResponse";
import { Users } from "../../types/users";
import PubSub from "pubsub-js";

export default function List() {

  const [searchResponse, setSearchResponse] = useState<SearchRespnse>({
    isFirst: true,
    isLoading: false,
    isError: false,
    users: [],
  });

  const { isFirst, isLoading, isError, users } = searchResponse;

  useEffect(()=>{
    const token = PubSub.subscribe('sd545',(msg, data)=>{
      setSearchResponse(data);

    })
    return ()=>{
      PubSub.unsubscribe(token)
    }
  })
  return (
    <div>
      {isFirst ? (
        <h2>Enter keyword to start</h2>
      ) : isLoading ? (
        <h2>It's loading</h2>
      ) : isError ? (
        <h2>try agian later</h2>
      ) : (
        <div className="row">
          {users.map((user:Users) => (
            <div className="card" key={user.id}>
              <a href={user.url} target="_blank">
                <img src={user.avatar_url} style={{ width: 100 }} />
              </a>
              <p className="card-text">{user.login}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

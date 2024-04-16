import SearchRespnse from "../../types/searchResponse";
import { Users } from "../../types/users";

type Props = {
  searchResponse: SearchRespnse;
};
export default function List(prop: SearchRespnse) {
  const { isFirst, isLoading, isError, users } = prop;
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
          {users.map((user) => (
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

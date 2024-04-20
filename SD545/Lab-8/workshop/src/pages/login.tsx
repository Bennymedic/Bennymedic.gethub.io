import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import logo from "../images/logo.png";
import musicServices from "../apis/services/music.services";


import { Playlists } from "../types/playlist";


export default function Login() {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const [response, setResponse] = useState<Playlists[]>([]);
  const [isInvalid, setIsInvalid] = useState(false);

  const { username, password } = userInfo;
  const [users, setUsers] = useState([
    { username: "pop", password: "password" },
    { username: "rock", password: "password" },
    { username: "hippop", password: "password" },
    { username: "mix", password: "password" },
  ]);


 

  const handleInputChage = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUserInfo({ ...userInfo, [name]: value });
  };

 

  async function login(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
     const isFound = users.find(
    (user) => user.username === username && user.password === password
  );
    try {
      if (isFound) {
        const result = await musicServices.login(userInfo);
        console.log(result)
        setResponse(result.data)
        console.log(result.data.accessToken)
        localStorage.setItem("access_token", result.data.accessToken);
      }else{
        setIsInvalid(true)
        throw new Error("invalid credential")
      }
    } catch (e) {
      if(e instanceof Error)
      console.log(e.message)
    }
  }

  return (
    <main className=" form-signin w-100 mt-4">
      <form>
        <div style={{ textAlign: "center" }}>
          <img
            className="mb-4 mt-4 ml-4"
            src={logo}
            alt="music logo"
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={username}
            onChange={handleInputChage}
            name="username"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={handleInputChage}
            name="password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-check text-start my-3"></div>
        <button className="btn btn-primary w-100 py-2" type="submit" onClick={login}>
          Sign in
        </button>
      </form>
      {isInvalid && <h4 style={{color:"red", textAlign:"center"}}>Incorrect username and password</h4>}
    </main>
  );
}

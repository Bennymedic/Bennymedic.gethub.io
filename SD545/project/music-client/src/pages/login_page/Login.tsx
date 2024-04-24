import { ChangeEvent, FormEvent, FormEventHandler, MouseEvent, MouseEventHandler, useEffect, useState } from "react";
import musicServices from "../../apis/services/music.services";
import './style.css'

import { useNavigate } from "react-router-dom";
import Blocks from './blocks'

export default function Login_Page() {
    const navigator = useNavigate()
    const [userInfo, setUserInfo] = useState({ username: "", password: "" });
    const [isInvalid, setIsInvalid] = useState(false);
  
    const { username, password } = userInfo;
    const users = ([
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
        e.preventDefault()
       const isFound = users.find(
      (user) => user.username === username && user.password === password
    );
      try {
        if (isFound) {
          const result = await musicServices.login(userInfo);
          if(result.data.accessToken){
            
          }
          localStorage.setItem("access_token", result.data.accessToken);
          navigator('/music')
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
    <>
      <section>
        <Blocks/>
          <div className="signin">
            <div className="content">
              <h2>Sign In</h2>

              <div className="form">
                <div className="inputBox">
                  <input
                    type="text"
                    value={password}
                    onChange={handleInputChage}
                    name="password"
                  />
                  <i>Username</i>
                </div>

                <div className="inputBox">
                  <input type="password" required onChange={handleInputChage} name="username"/> <i>Password</i>
                </div>


                <div className="inputBox">
                  {/* <input type="submit" value="Login" onSubmit={login}/> */}
                  <button className="btn btn-primary w-100 py-2" type="submit" onClick={login}>
          Sign in
        </button>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        {isInvalid && <h4 style={{color:"red", textAlign:"center"}}>Incorrect username and password</h4>}

    </>
  )
}

import { ChangeEvent, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

import "./App.scss";
import avatar from "./images/bozai.png";

interface Comment {
  rpid: number | string;
  user: {
    uid: string;
    avatar: string;
    uname: string;
  };
  content: string;
  ctime: string;
  like: number;
}

// Comment List data



// current logged in user info
const user = {
  // userid
  uid: "30009257",
  // profile
  avatar,
  // username
  uname: "John",
};

// Nav Tab
const tabs = [
  { type: "hot", text: "Top" },
  { type: "newest", text: "Newest" },
];



const App = () => {
  const [commentList, setCommentList] = useState<Comment[]>([]);

  const [activeType, setActiveType] = useState("hot");

  const [inputVal, setInputVal] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);


  useEffect(()=>{
    async function getList(){
      const response = await fetch('http://localhost:3004/lists');
      const result= await response.json();
      setCommentList(_.orderBy(result, "like", "desc"))
    }
    getList()
  }, [])


  const deleteComment = (rpid: number | string) => {
    setCommentList(commentList.filter((item) => item.rpid !== rpid));
  };

  const changeActiveType = (type: string) => {
    setActiveType(type);

    if (type === "hot") {
      setCommentList(_.orderBy(commentList, "like", "desc"));
      //setCommentList(commentList.sort((a,b)=> b.like - a.like));
    } else {
      setCommentList(_.orderBy(commentList, "ctime", "desc"));
      //setCommentList(commentList.sort((a,b)=> a.ctime.localeCompare(b.ctime)));
    }
  };
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputVal(e.currentTarget.value);
    e.currentTarget.focus();
  };

  const makePost = () => {
    // console.log(textareaRef.current?.value);
    // do another version: controlled component
    const newComment = {
      rpid: uuidv4(),
      user,
      //content:textareaRef.current!.value, //uncontrolled component
      content: inputVal, //controlled component

      ctime: dayjs(Date.now()).format("MM-DD HH:mm"),
      like: 0,
    };

    setCommentList([...commentList, newComment]);
    //textareaRef.current!.value = '';
    //textareaRef.current!.focus();
    setInputVal("");
  };

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            {tabs.map((tab) => (
              <span
                key={tab.type}
                // className={`nav-item ${tab.type === activeType && 'active'}`}
                className={classNames("nav-item", {
                  active: tab.type === activeType,
                })}
                onClick={() => changeActiveType(tab.type)}
              >
                {tab.text}
              </span>
            ))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* comment */}
            <textarea
              ref={textareaRef}
              className="reply-box-textarea"
              placeholder="tell something..."
              value={inputVal}
              onChange={handleInputChange}
            />
            {/* post button */}
            <div className="reply-box-send" onClick={makePost}>
              <div className="send-text">post</div>
            </div>
          </div>
        </div>
        {/* comment list */}
        <div className="reply-list">
          {/* comment item */}
          {commentList.map((item) => (
            <Item
              comment={item}
              currentUserId={user.uid}
              onDelete={deleteComment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

interface Props {
  comment: Comment;
  currentUserId: string;
  onDelete: (rpid: string | number) => void;
}
function Item(prop: Props) {
  const { rpid, like, user, ctime, content } = prop.comment;
  const currentUserId = prop.currentUserId;
  const onDelete = prop.onDelete;

  return (
    <div className="reply-item" key={rpid}>
      {/* profile */}
      <div className="root-reply-avatar">
        <div className="bili-avatar">
          <img className="bili-avatar-img" alt="" />
        </div>
      </div>

      <div className="content-wrap">
        {/* username */}
        <div className="user-info">
          <div className="user-name">{user.uname}</div>
        </div>
        {/* comment content */}
        <div className="root-reply">
          <span className="reply-content">{content}</span>
          <div className="reply-info">
            {/* comment created time */}
            <span className="reply-time">{ctime}</span>
            {/* total likes */}
            <span className="reply-time">Like:{like}</span>

            {user.uid === currentUserId && (
              <span className="delete-btn" onClick={() => onDelete(rpid)}>
                Delete
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

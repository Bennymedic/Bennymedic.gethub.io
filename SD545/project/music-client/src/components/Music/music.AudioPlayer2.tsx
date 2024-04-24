import React, { useState, useEffect, useRef, memo } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import player_icon from "../../images/musicplayer.jpg";
import "react-jinke-music-player/assets/index.css"; 
import { Playlists } from "../../types/playlist";

interface ReactJkMusicPlayerAudioListProps {
  name: string | React.ReactNode,
  musicSrc: string | (() => Promise<string>),
  cover?: string,
  singer?: string | React.ReactNode,
  duration?: number,
  lyric?: string,
  [key: string]: any
}

type Props = {
  playlist:Playlists[]
}



const JinkeMusicPlayer = ({playlist}: Props) => {

  const converterPlatlistToJinke = (playlist:Playlists[])=>{
    const result:ReactJkMusicPlayerAudioListProps[]= playlist.map((item)=>({
      musicSrc: `http://localhost:9000/${item.urlPath}`,
      name:item.title,
      cover:player_icon
    }))
    return result;
  }
  const audioList = converterPlatlistToJinke(playlist)

  return (
    <ReactJkMusicPlayer
    autoPlayInitLoadPlayList={false}
    autoHiddenCover = {false}
    showMiniModeCover ={false}
      quietUpdate
      clearPriorAudioLists
      mode="full"
      audioLists={audioList}
    />
  )
}
export default memo(JinkeMusicPlayer);



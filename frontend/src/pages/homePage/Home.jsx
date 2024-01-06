/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { Grid, Autocomplete, TextField, Avatar } from "@mui/material";

import MusicList from "../../redux/reducers/music/MusicList";
import LikdedMuiscList from "./../../redux/reducers/likdedMuiscList/LikdedMuiscList";

import "./Home.scss";

const Home = () => {
  const currentTime = new Date().getHours();
  const [likedMusicsId, setLikedMusicsId] = useState([]);
  const [authorsList, setAuthorsList] = useState([]);
  const [musicsList, setMusicsList] = useState([]);
  const [likedList, setLikedList] = useState(false);

  const location = useLocation();
  const userState = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/api/musicList");
        setMusicsList(result.data[0]?.musicList || []);
      } catch (error) {
        console.error("Error fetching music list:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/api/getAuthorsList");
        setAuthorsList(result.data[0]?.authorsList || []);
      } catch (error) {
        console.error("Error fetching authors list:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("api/getAllUsers");
        const id = userState.id-1 === -1 ? 0 : userState.id-1;
        likedMusicsId.push(result.data[id].favoriteMusic);
      } catch (error) {
        console.error("Error fetching authors list:", error);
      }
    };

    fetchData();
  }, []);

  console.log(userState.id)

  return (
    <div className="mainDiv">
      <Grid container spacing={2} className="div">
        <div className="stickyWrapper">
          <Grid xs={2} className="grid2">
            <div className="div1">
              <div>
                <HomeIcon className="icon" />
                <p className="iconName home">Home</p>
              </div>
              <div>
                <SearchIcon className="icon searchIcon" />
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={musicsList}
                  getOptionLabel={(option) => option.name}
                  sx={{ width: 300, color: "white" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Search in Your Library" />
                  )}
                />
              </div>
            </div>
            <div className="div2">
              <div>
                <LibraryMusicIcon className="icon" />
                <p className="iconName library">Your Library</p>
              </div>
              <button
                className="likedList"
                onClick={(e) => setLikedList(!likedList)}
              >
                <div className="avatars">
                  <Avatar src="https://misc.scdn.co/liked-songs/liked-songs-640.png" />
                  <p>Liked Songs</p>
                </div>
              </button>
              {authorsList.map((el) => (
                <div key={el.id} className="avatars">
                  <Avatar alt={el.name} src={el.img} />
                  <p>{el.name}</p>
                </div>
              ))}
            </div>
          </Grid>
        </div>
        <Grid xs={9.3} className="grid9">
          <h3>
            {currentTime >= 5 && currentTime < 12
              ? "Good morning"
              : currentTime >= 12 && currentTime < 18
                ? "Good afternoon"
                : "Good evening"}, {userState.name}
          </h3>
          {likedList ? (
            <LikdedMuiscList likedMusicsId={likedMusicsId} />
          ) : (
            <MusicList likedMusicsId={likedMusicsId} userId={userState.id} />
          )}
        </Grid>
      </Grid>
      <div className="playBar"></div>
    </div>
  );
};

export default Home;

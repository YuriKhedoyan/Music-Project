/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { Grid, Autocomplete, TextField, Avatar } from "@mui/material";

import MusicList from "../../redux/reducers/music/MusicList";

import "./Home.scss";

const Home = () => {
  const currentTime = new Date().getHours();
  const [authorsList, setAuthorsList] = useState([]);
  const [musicsList, setMusicsList] = useState([]);
  const location = useLocation();
  const userState = location.state;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/api/musicList");
      setMusicsList(result.data[0].musicList);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/api/getAuthorsList");
      setAuthorsList(result.data[0].authorsList);
    };

    fetchData();
  }, []);

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
              {authorsList.map(el => <div className="avatars">
                <Avatar alt={el.name} src={el.img} /><p>{el.name}</p>
              </div>)}
            </div>
          </Grid>
        </div>
        <Grid xs={9.3} className="grid9">
          {currentTime <= 10 ? (
            <h3>Good Morning</h3>
          ) : currentTime <= 12 ? (
            <h3>Good Afternoon</h3>
          ) : (
            <h3>Good Evning</h3>
          )}
          <MusicList userId={userState.id} />
        </Grid>
      </Grid>
      <div className="playBar"></div>
    </div>
  );
};

export default Home;

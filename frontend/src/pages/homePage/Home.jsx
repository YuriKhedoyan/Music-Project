/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Grid, Tooltip, IconButton, Autocomplete, TextField, Avatar } from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import MusicList from "../../redux/reducers/music/MusicList";

import './Home.scss'

const Home = () => {
  const currentTime = new Date().getHours();
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 }
  ];

  const location = useLocation();
  const userState = location.state;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/api/getAllUsers");
      console.log(result.data)
    };
    fetchData();
  }, []);

  return (
    <div className="mainDiv">
      <Grid container spacing={2} className='div'>
        <div className="stickyWrapper">
          <Grid xs={2} className="grid4">
            <div className="div1">
              <div><HomeIcon className="icon" /><p className="iconName home">Home</p></div>
              <div><SearchIcon className="icon" /><p className="iconName search">Search</p></div>
            </div>
            <div className="div2">
              <div><LibraryMusicIcon className="icon" /><p className="iconName library">Your Library</p></div>
              <div>
                <Tooltip title="Search in Your Library">
                  <IconButton>
                    <SearchIcon className="icon" />
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="Search in Your Library" />}
                    />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="avatars">
                <Avatar>H</Avatar>
                <Avatar>H</Avatar>
                <Avatar>H</Avatar>
                <Avatar>H</Avatar>
                <Avatar>H</Avatar>
                <Avatar>H</Avatar>
              </div>
            </div>
          </Grid>
        </div>
        <Grid xs={9} className="grid8">
          {currentTime <= 10 ? <h3>Good Morning</h3> : currentTime <= 12 ? <h3>Good Afternoon</h3> : <h3>Good Evning</h3>}
          <MusicList userId={userState.id}/>
        </Grid>
      </Grid>
      <div className="playBar"></div>
    </div>
  );
};

export default Home;

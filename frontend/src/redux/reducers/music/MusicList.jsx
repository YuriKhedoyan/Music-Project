/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Card,
} from "@mui/material/";

import "./MusicList.scss";

const MusicList = ({ userId, likedMusicsId }) => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("api/musicList");
      setMusicList(result.data[0].musicList);
      console.log(result.data[0].musicList, ":::::::::::::::::::::::");
    };
    fetchData();
  }, []);


  const addFavorite = (id) => {
    axios.post("api/addFavoriteMusic/" + id, { userId });
  };

  const removeFavorite = (id) => {
    //Write code for deleting music from favorite (to do)
  };

  const favoriteSongs = musicList
    .filter((el) => likedMusicsId[0]?.includes(el.id))
    .map((el) => el.id);

  const updatedMusicList = musicList.map((el) => ({
    favorite: favoriteSongs.includes(el.id),
  }));

  return (
    <>
      {musicList?.map((el, i) => (
        <>
          <div className="musicList" key={el.id}>
            <Card sx={{ maxWidth: 250, height: 500 }} className="musicItem">
              <CardActions className="cardAction">
                {!updatedMusicList[i].favorite ? (
                  <Button size="small" className="favButton" onClick={(e) => addFavorite(el.id)} > <FavoriteBorderIcon /> </Button>
                ) : (
                  <Button size="small" className="favButton" onClick={(e) => removeFavorite(el.id)} > <FavoriteIcon /> </Button>
                )}
              </CardActions>
              <CardMedia
                sx={{ height: 250, width: 250 }}
                image={el.img}
                title={el.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <p>{el.artist}</p>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p>{el.name}</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </>
      ))}
    </>
  );
};

export default MusicList;

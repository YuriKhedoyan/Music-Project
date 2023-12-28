/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Typography, CardMedia, CardContent, CardActions, Button, Card } from '@mui/material/';

import './MusicList.scss'

const MusicList = userId => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/api/musicList");
      setData(result.data[0].musicList);
    };
    fetchData();
  }, []);

  const addFavorite = id => {
    axios.post('http://localhost:3000/api/addFavoriteMusic/' + id, {userId})
  }

  return (
    <>
      {data?.map(el => <>
        <div className="musicList">
          <Card sx={{ maxWidth: 250, height: 500 }} className="musicItem">
            <CardActions className="cardAction">
              <Button size="small" className="favButton" onClick={e => addFavorite(el.id)}><FavoriteBorderIcon /></Button>
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
      </>)}
    </>
  )
}

export default MusicList;
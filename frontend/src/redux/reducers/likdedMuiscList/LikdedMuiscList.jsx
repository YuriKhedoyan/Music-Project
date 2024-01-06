import { useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
} from "@mui/material/";

const LikdedMuiscList = likedMuiscsId => {
  likedMuiscsId = Object.values(likedMuiscsId).map((el, i) => el[i]);
  const [musicsList, setMusicsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3000/api/musicList");
        setMusicsList(result.data[0]?.musicList || []);
      } catch (error) {
        console.error("Error fetching music list:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {musicsList.filter((el) => likedMuiscsId.includes(el.id)).map((el) => (
        <>
          <div className="musicList">
            <Card sx={{ maxWidth: 250, height: 500 }} className="musicItem">
              <CardActions className="cardAction"></CardActions>
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

export default LikdedMuiscList;

/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
} from "@mui/material/";

const LikdedMuiscList = likedMusicsId => {
  likedMusicsId = Object.values(likedMusicsId).flat();
  const [musicsList, setMusicsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("api/musicList");
        setMusicsList(result.data[0]?.musicList || []);
      } catch (error) {
        console.error("Error fetching music list:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      
      {musicsList.filter((el) => likedMusicsId[0]?.includes(el.id)).map(currentMuisc => (
        <>
          <div className="musicList" key={currentMuisc.id}>
            <Card sx={{ maxWidth: 250, height: 500 }} className="musicItem">
              <CardActions className="cardAction"></CardActions>
              <CardMedia
                sx={{ height: 250, width: 250 }}
                image={currentMuisc.img}
                title={currentMuisc.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <p>{currentMuisc.artist}</p>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p>{currentMuisc.name}</p>
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

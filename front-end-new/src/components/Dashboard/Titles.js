import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const CardE = (props) => {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 300, margin: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
          Title
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Title:{props.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Score:{props.score}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
        <Button size="small">Update</Button>
      </CardActions>
    </Card>
  );
};

const Titles = () => {
  const [titles, setTitles] = useState(null);
  useEffect(() => {
    axios
      .get("https://gradapp.adaptable.app/titles")
      .then((res) => {
        setTitles(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Button>Add</Button>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {titles !== null ? (
          titles.map((item) => {
            return <CardE title={item.title} score={item.score} />;
          })
        ) : (
          <></>
        )}
      </Box>
    </div>
  );
};
export default Titles;

import React, { useState, useEffect } from "react";
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
          Exception
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Title:{props.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Sector:{props.sector}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Preference:{props.preference}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          Delete
        </Button>
        <Button variant="contained" size="small">
          Update
        </Button>
      </CardActions>
    </Card>
  );
};

const Exceptions = () => {
  const [exceptions, setExceptions] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [axsData, setAxsData] = useState({
    title: "",
    sector: "",
    preference: 0,
  });
  useEffect(() => {
    axios
      .get("https://gradapp.adaptable.app/exceptions")
      .then((res) => {
        setExceptions(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleOnchange = (event) => {
    setAxsData({ ...axsData, [event.target.name]: event.target.value });
  };
  const handleAddClick = () => {
    setShowAddForm(true);
  };

  const handleSendData = (event) => {
    event.preventDefault();
    axios
      .post("https://gradapp.adaptable.app/exceptions", axsData)
      .then((res) => {
        console.log(res);
        setAxsData({
          title: "",
          sector: "",
          preference: 0,
        });
      })
      .catch((err) => console.log(err));

    setShowAddForm(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleAddClick}>
        Add
      </Button>

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {exceptions !== null ? (
          exceptions.map((item) => {
            return (
              <CardE
                title={item.title}
                preference={item.preference}
                sector={item.sector}
              />
            );
          })
        ) : (
          <></>
        )}
      </Box>

      {showAddForm && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 9999,
          }}
        >
          <h3>Add Exception</h3>
          {/* Add your form fields here */}
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={(event) => handleOnchange(event)}
            value={axsData.title}
          />
          <input
            type="text"
            placeholder="Sector"
            name="sector"
            r
            onChange={(event) => handleOnchange(event)}
            value={axsData.sector}
          />
          <input
            type="text"
            placeholder="Preference"
            name="preference"
            onChange={(event) => handleOnchange(event)}
            value={axsData.preference}
          />
          <Button
            variant="contained"
            onClick={(event) => handleSendData(event)}
          >
            Send
          </Button>
          <Button variant="contained" onClick={() => setShowAddForm(false)}>
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
};
export default Exceptions;

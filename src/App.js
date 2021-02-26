import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Typography, Container, AppBar } from "@material-ui/core";

import "./App.css";
import { Pages } from "./pages/";

const App = () => {
  const dispatch = useDispatch();
  // const [globState, setGlobState] = useState({
  //   image: "",
  //   imageBin: "",
  //   condition: "",
  //   brand: "",
  //   description: "",
  // });
  return (
    <div>
      <Container maxwidth="lg">
        <AppBar position="static" color="inherit">
          <Typography variant="h4" align="center">
            Find An Item
          </Typography>
        </AppBar>

        <Pages />
      </Container>
    </div>
  );
};

export default App;

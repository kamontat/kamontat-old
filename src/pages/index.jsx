import React from "react";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import { styled, makeStyles } from "@material-ui/core/styles";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const IndexPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <MyButton>Hello world 2</MyButton>
      <Button className={classes.root}>Hello World</Button>
    </div>
  );
};

export default IndexPage;

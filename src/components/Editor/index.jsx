import { makeStyles } from "@material-ui/core";
import MonacoEditor, { loader } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import SideBar from "../SideBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  content: {
    flexGrow: 1,
    overflow: "hidden",
    height: "80vh",
    [theme.breakpoints.up("lg")]: {
      height: "84vh",
    },
  },
}));

const Editor = () => {
  const classes = useStyles();
const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    window.addEventListener("DOMContentLoaded", () => {
      setLoaded(true)
      loader.config(window.loaderConfig);
    });
  }, []);
  return (
    <div className={classes.root}>
      <SideBar />
      <div className={classes.content}>
        {loaded && <MonacoEditor language="javascript" value="// javascript" theme="vs-dark" />}
      </div>
    </div>
  );
};

export default Editor;

import { useState } from "react";
import { IconButton, Toolbar, Typography, makeStyles, Paper, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";
import "./App.css";
import Editor from "./components/Editor";
import menuBtns from './buttons'

const useStyles = makeStyles((theme) => ({
  button: {
    padding: 0,
    textTransform: "capitalize",
    color: "white",
  },
  paper: {
    backgroundColor: "#292D3E",
  },
  controls: {
    justifySelf: "right",
  },
  iconbtn: {
    marginLeft: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [maximized, setMaximized] = useState(false);

  const handleClick = (e, id) => {
    const tmpLoc = e.target.parentNode.getBoundingClientRect();
    window.openMenu(tmpLoc.left, tmpLoc.bottom, id);
  };

  return (
    <>
      <div className="draggable">
        <div className="no-drag">
          <Paper elevation={0} className={classes.paper}>
            {
              menuBtns.map((item)=>(
            <Button
            key={item.id}
              className={classes.button}
              onClick={(e)=>handleClick(e, item.id)}>
              {item.title}
            </Button>
              ))
            }
          </Paper>
        </div>
        <div>
          <Typography noWrap>Code Editor &copy;</Typography>
        </div>
        <div className="no-drag">
          <div className={classes.controls}>
            <Toolbar variant="dense">
              <IconButton
                edge="end"
                onClick={() => window.minimizeWindow()}
                ize="small"
                className={classes.iconbtn}>
                &minus;
              </IconButton>
              <IconButton
                edge="end"
                onClick={() => {
                  window.maxUnmaxWindow();
                  setMaximized(window.isWindowMaximized());
                }}
                size="small"
                className={classes.iconbtn}>
                {maximized ? <FiMinimize2 /> : <FiMaximize2 />}
              </IconButton>
              <IconButton
                edge="end"
                size="small"
                onClick={() => window.closeWindow()}
                color="secondary"
                className={classes.iconbtn}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Toolbar>
          </div>
        </div>
      </div>
      <Editor />
    </>
  );
}

export default App;

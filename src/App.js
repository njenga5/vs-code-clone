import { useState } from "react";
import {
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  Paper,
  Button,
  Drawer,
  Tooltip
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";
import "./App.css";
import Editor from "./components/Editor";
import menuBtns from "./buttons";

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
  paperAnchorBottom: {
    left: theme.spacing(6),
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
            {menuBtns.map((item) => (
              <Button
                key={item.id}
                className={classes.button}
                onClick={(e) => handleClick(e, item.id)}>
                {item.title}
              </Button>
            ))}
          </Paper>
        </div>
        <div>
          <Typography noWrap>Code Editor &copy;</Typography>
        </div>
        <div className="no-drag">
          <div className={classes.controls}>
            <Toolbar variant="dense">
              <Tooltip title="Minimize">
                <IconButton
                  edge="end"
                  onClick={() => window.minimizeWindow()}
                  ize="small"
                  className={classes.iconbtn}>
                  &minus;
                </IconButton>
              </Tooltip>
              <Tooltip title="Maximize">
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
              </Tooltip>
              <Tooltip title="Close">
                <IconButton
                  edge="end"
                  size="small"
                  onClick={() => window.closeWindow()}
                  color="secondary"
                  className={classes.iconbtn}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </div>
        </div>
      </div>
      <div style={{ height: 50, background: "aqua", marginBottom: 5 }}></div>
      <Editor />
      <Drawer
        anchor="bottom"
        open={true}
        variant="persistent"
        classes={{ paperAnchorBottom: classes.paperAnchorBottom }}>
        <div style={{ height: 50, background: "aqua", marginBottom: 5 }}></div>
      </Drawer>
    </>
  );
}

export default App;

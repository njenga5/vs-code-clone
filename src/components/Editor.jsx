import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Drawer, makeStyles } from "@material-ui/core";
import MonacoEditor, { loader } from "@monaco-editor/react";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/Inbox";
import { useEffect, useState } from "react";
import clsx from "clsx";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(6),
  },
  content: {
    flexGrow: 1,
    overflow: "hidden",
    height: "87vh",
  },
  paperAnchorLeft:{
    top:theme.spacing(6)+4,
    left:0,
    right:"auto",
    height:"87vh",
    backgroundColor: "#292D3E",
    color:"white"
  }
}));

const Editor = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    loader.config(window.loaderConfig);
  }, []);
  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
          paperAnchorLeft:classes.paperAnchorLeft
        }}>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text} onClick={handleDrawerToggle}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text} onClick={handleDrawerToggle}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div id="test" className={classes.content}>
        <MonacoEditor language="javascript" value="// javascript" theme="vs-dark" />
      </div>
    </div>
  );
};

export default Editor;

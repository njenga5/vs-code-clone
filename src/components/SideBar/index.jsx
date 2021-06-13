import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import { useState } from "react";
import clsx from "clsx";
import sideBarContents from "./ListItems";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
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
  paperAnchorLeft: {
    top: theme.spacing(6) + 4,
    left: 0,
    right: "auto",
    // height: "87vh",
    backgroundColor: "#292D3E",
    color: "white",
  },
  listItem:{
    marginBottom:theme.spacing(2),
    top:0
  }
}));

const SideBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
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
        paperAnchorLeft: classes.paperAnchorLeft,
      }}>
      <Divider />
      <List>
        {sideBarContents.map(({ id, title, icon }) => (
          <ListItem button key={id} onClick={handleDrawerToggle} className={classes.listItem}>
            <Tooltip title={title} arrow placement="right">
              <ListItemIcon>{icon}</ListItemIcon>
            </Tooltip>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;

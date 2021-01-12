import React from "react";
import "./NavigationBar.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navButtons:{
      
      color: "#a1a1a1!important",
      '&:hover':{
        color: 'grey',
        boxShadow: "0px 2px 10px #888888"
      }
    },
  })
);
interface NavigationBarProps {
  navigateFoodSelect: () => void;
  navigateToRecipes: () => void;
  navigateToMenus: () => void;

}

export default function NavigationBar(props: NavigationBarProps) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          //onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Button color="inherit" className="navButtons" onClick={props.navigateToRecipes}>UPPSKRIFTIR</Button>
        <Button color="inherit" className="navButtons" onClick={props.navigateToMenus}>MATSEÐILL</Button>
        <Button color="inherit" className="navButtons" onClick={props.navigateFoodSelect}>VELJA MAT</Button>
      </Toolbar>
    </AppBar>
  );
}

/*
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>MATSEÐILL</MenuItem>
          <MenuItem onClick={handleClose}>UPPSKRIFITR</MenuItem>
          <MenuItem onClick={handleClose}>VELJA MAT</MenuItem>
        </Menu>
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
*/

/*         <Typography variant="h6" className={classes.title}>
          <Button color="inherit">HEIM</Button>
        </Typography>  */
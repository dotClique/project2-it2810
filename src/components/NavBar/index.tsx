import { MouseEvent, useState } from 'react';
import { AppBar, IconButton, Link, MenuItem, Menu, Toolbar, Typography } from '@material-ui/core';
import { MenuIcon } from '@heroicons/react/solid';
import useStyles from './styles';

type MenuProps = {
  title: string;
};

export default function NavBar(props: MenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | (EventTarget & Element)>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = (event: MouseEvent) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };
  const classes = useStyles();
  return (
    <div>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.icon} onClick={handleMenu}>
            <MenuIcon width={'2rem'} />
          </IconButton>
          <Typography variant="h6" component="div">
            {props.title}
          </Typography>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            keepMounted
            open={menuOpen}
            onClose={handleClose}
          >
            <Link href={'/page1'}>
              <MenuItem className={classes.menuItem}>Page 1</MenuItem>
            </Link>
            <Link href={'/page2'}>
              <MenuItem className={classes.menuItem}>Page 2</MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

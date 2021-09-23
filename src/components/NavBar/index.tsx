import { MouseEvent, useState } from 'react';
import {
  AppBar,
  IconButton,
  Link,
  MenuItem,
  Menu,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { MenuIcon } from '@heroicons/react/solid';
import useStyles from './styles';
import IconLink from '../IconLink';
import { ChartBarIcon, ChartPieIcon } from '@heroicons/react/outline';

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
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <AppBar position="sticky" color="secondary">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" component="div">
            {props.title}
          </Typography>
          {isMobile ? (
            <>
              <IconButton edge="end" className={classes.icon} onClick={handleMenu}>
                <MenuIcon width={'2rem'} />
              </IconButton>
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
                <Link underline="none" href={'/page1'}>
                  <MenuItem className={classes.menuItem}>Page 1</MenuItem>
                </Link>
                <Link underline="none" href={'/page2'}>
                  <MenuItem className={classes.menuItem}>Page 2</MenuItem>
                </Link>
              </Menu>
            </>
          ) : (
            <div className={classes.linkContainer}>
              <IconLink title={'page1'} icon={<ChartBarIcon />} />
              <IconLink title={'page2'} icon={<ChartPieIcon />} />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

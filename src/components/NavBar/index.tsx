import { ChartBarIcon, ChartPieIcon, CogIcon } from '@heroicons/react/outline';
import { MenuIcon, InboxInIcon } from '@heroicons/react/solid';
import {
  AppBar,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { MouseEvent, useContext, useState } from 'react';
import { OpenSettingsContext } from '../../helpers/context';
import IconLink from '../IconLink';
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
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [, setOpenSettings] = useContext(OpenSettingsContext);

  return (
    <div>
      <AppBar position="sticky" color="secondary">
        <Toolbar className={classes.toolBar}>
          <Link href={'/'} underline={'none'}>
            <Typography variant="h6" component="div" className={classes.title}>
              {props.title}
            </Typography>
          </Link>
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
                <Link underline="none" href={'/commits'}>
                  <MenuItem className={classes.menuItem}>Commits</MenuItem>
                </Link>
                <Link underline="none" href={'/bar'}>
                  <MenuItem className={classes.menuItem}>Bar</MenuItem>
                </Link>
                <Link underline="none" href={'/mergerequests'}>
                  <MenuItem className={classes.menuItem}>Merge Requests</MenuItem>
                </Link>
                <Link underline="none" href={'/timeperissuelabel'}>
                  <MenuItem className={classes.menuItem}>Issue-label</MenuItem>
                </Link>
                <MenuItem className={classes.menuItem} onClick={() => setOpenSettings(true)}>
                  Settings
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div className={classes.linkContainer}>
              <IconLink url={'commits'} title={'Commits'} icon={<ChartPieIcon />} />
              <IconLink url={'bar'} title={'Bar'} icon={<ChartBarIcon />} />
              <IconLink url={'timeperissuelabel'} title={'Issue-label'} icon={<ChartBarIcon />} />
              <IconLink url={'mergerequests'} title={'Merge requests'} icon={<InboxInIcon />} />
              <IconLink
                title={'settings'}
                icon={<CogIcon />}
                onClick={() => setOpenSettings(true)}
              />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

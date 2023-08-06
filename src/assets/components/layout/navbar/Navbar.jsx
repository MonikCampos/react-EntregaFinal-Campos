import "./Navbar.css"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CartWidgetContainer from "../../common/cartWidget/CartWidgetContainer";


const drawerWidth = 240;


function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: "#0c203b" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/"><img src="https://res.cloudinary.com/dawadzlfe/image/upload/v1688424143/CODER-React/Dermo/LogoDermo_alltnj.png" alt="DermoCosmetic" /></Link>
      </Typography>
      <Divider />
      <List>
        <Link to="/">
          <ListItem key="Todos" disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: "#f2cedb", backgroundColor: "#0c203b" }}>
              <ListItemText primary="Todos" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/brandName/Eucerin">
          <ListItem key="Eucerin" disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: "#f2cedb", backgroundColor: "#0c203b" }}>
              <ListItemText primary="Eucerin" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/brandName/ISDIN">
          <ListItem key="ISDIN" disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: "#f2cedb", backgroundColor: "#0c203b" }}>
              <ListItemText primary="ISDIN" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/brandName/La-Roche-Posay">
          <ListItem key="La-Roche-Posay" disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: "#f2cedb", backgroundColor: "#0c203b" }}>
              <ListItemText primary="La Roche-Posay" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', backgroundColor: "#f2cedb" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#0c203b" }}>
        <Toolbar sx={{ backgroundColor: "#0c203b" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{ flexShrink: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/"><img src="https://res.cloudinary.com/dawadzlfe/image/upload/v1688424143/CODER-React/Dermo/LogoDermo_alltnj.png" alt="DermoCosmetic" /></Link>
          </Typography>
          <Box sx={{ width: '100%', display: { xs: 'none', sm: 'block' } }}>
            <Link to="/"><Button sx={{ color: "#F2CEDB" }}>Todos</Button></Link>
            <Link to="/brandName/Eucerin"><Button sx={{ color: "#F2CEDB" }}>Eucerin</Button></Link>
            <Link to="/brandName/ISDIN"><Button sx={{ color: "#F2CEDB" }}>ISDIN</Button></Link>
            <Link to="/brandName/La-Roche-Posay"><Button sx={{ color: "#F2CEDB" }}>La Roche-Posay</Button></Link>
          </Box>
          <Typography
            component="div"
            sx={{ flexShrink: 1 }}
          >
            <CartWidgetContainer />
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

      </Box>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {/* <Outlet /> */}
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
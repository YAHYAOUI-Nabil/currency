import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { useStateContext } from '../contexts/contextProvider';

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {!activeMenu &&
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>setActiveMenu(true)}
            >
              <MenuIcon />
            </IconButton>
          }
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              textAlign: 'right' 
            }}
          >
            CURRENCY CONVERTER
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
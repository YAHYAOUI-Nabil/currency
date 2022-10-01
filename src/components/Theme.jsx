import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import { useStateContext } from '../contexts/contextProvider';

const useStyle = makeStyles(()=>({
  container: {
    position: 'fixed',
    top:0,
    left:0,
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100vw',
    height:'100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex:9999999,
  },
  content: {
    width: '20vw',
    backgroundColor: 'white',
    opacity:1,
  }
}))

const Theme = () => {
  const classes = useStyle()
  const { setThemeSettings } = useStateContext();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                  variant="h6" 
                  component="div" 
                  sx={{ 
                    flexGrow: 1,
                    textAlign: 'right' 
                  }}
              >
                  Themes Setting
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: 2 }}
                onClick={()=>setThemeSettings(false)}
              >
                <CloseIcon/>
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </div>
  )
}

export default Theme
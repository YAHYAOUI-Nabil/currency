import { Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import { useStateContext } from '../contexts/contextProvider';

const DrawerHeader = styled('div')(({theme})=>({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

const Menu = () => {
  const theme = useTheme()
  const { activeMenu, setActiveMenu } = useStateContext()

  return (
    <Box>
      <CssBaseline/>
      <Drawer
        sx={{
          width:'20vw',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '20vw',
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={activeMenu}
      >
        <DrawerHeader>
          <IconButton 
            onClick={()=>setActiveMenu(false)}
          >
            <CloseIcon/>
          </IconButton>
        </DrawerHeader>
        <List>
          {['Currency Converter', 'Currency List', 'Historical Currency Data'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

export default Menu